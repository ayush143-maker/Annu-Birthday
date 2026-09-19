import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/content";

const DEFAULT_VOLUME = 0.9;
const FADE_DURATION = 650;

export function useAudioDirector() {
  const playersRef = useRef(new Map());
  const fadesRef = useRef(new Map());
  const attemptRef = useRef({});
  const mutedRef = useRef(false);
  const currentTrackIdRef = useRef(null);
  const isPlayingRef = useRef(false);

  const [currentTrackId, setCurrentTrackIdState] = useState(null);
  const [isPlaying, setIsPlayingState] = useState(false);
  const [isMuted, setIsMutedState] = useState(false);

  const setCurrentTrackId = (trackId) => {
    currentTrackIdRef.current = trackId;
    setCurrentTrackIdState(trackId);
  };

  const setIsPlaying = (playing) => {
    isPlayingRef.current = playing;
    setIsPlayingState(playing);
  };

  const getTrack = (trackId) => {
    return siteContent.music.tracks.find((track) => track.id === trackId) || null;
  };

  const srcListFor = (track) => {
    if (track.srcs && track.srcs.length) {
      return track.srcs;
    }
    return track.src ? [track.src] : [];
  };

  const clearFade = (trackId) => {
    const frame = fadesRef.current.get(trackId);
    if (frame) {
      cancelAnimationFrame(frame);
    }
    fadesRef.current.delete(trackId);
  };

  const createPlayer = (src) => {
    const player = new Audio(src);
    player.loop = true;
    player.preload = "auto";
    player.volume = 0;
    player.muted = mutedRef.current;
    player.dataset.src = src;
    return player;
  };

  const ensurePlayer = (trackId, src) => {
    const existing = playersRef.current.get(trackId);

    if (existing && existing.dataset.src === src) {
      return existing;
    }

    if (existing) {
      existing.pause();
    }

    const player = createPlayer(src);
    playersRef.current.set(trackId, player);
    return player;
  };

  const preloadAll = () => {
    siteContent.music.tracks.forEach((track) => {
      const srcs = srcListFor(track);
      if (!srcs.length) {
        return;
      }

      const idx = Math.min(attemptRef.current[track.id] || 0, srcs.length - 1);
      const player = ensurePlayer(track.id, srcs[idx]);
      player.load();
    });
  };

  const fadeOut = (trackId, { duration = FADE_DURATION, pauseAfter = false } = {}) => {
    const player = playersRef.current.get(trackId);
    if (!player) {
      return;
    }

    clearFade(trackId);

    const start = performance.now();
    const from = player.volume;

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      player.volume = Math.max(0, from * (1 - progress));

      if (progress < 1) {
        fadesRef.current.set(trackId, requestAnimationFrame(step));
      } else {
        if (pauseAfter) {
          player.pause();
        }
        clearFade(trackId);
      }
    };

    fadesRef.current.set(trackId, requestAnimationFrame(step));
  };

  const fadeIn = (trackId, { duration = FADE_DURATION, targetVolume = DEFAULT_VOLUME } = {}) => {
    const track = getTrack(trackId);
    if (!track) {
      return;
    }

    const srcs = srcListFor(track);
    if (!srcs.length) {
      return;
    }

    const attempt = Math.min(attemptRef.current[trackId] || 0, srcs.length - 1);
    const player = ensurePlayer(trackId, srcs[attempt]);

    clearFade(trackId);

    player.muted = mutedRef.current;
    setCurrentTrackId(trackId);
    setIsPlaying(true);

    const target = Math.min(Math.max(targetVolume, 0), 1);
    const playPromise = player.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        if (attempt < srcs.length - 1) {
          attemptRef.current[trackId] = attempt + 1;
          playersRef.current.delete(trackId);
          fadeIn(trackId, { duration, targetVolume });
        } else {
          player.pause();
          setCurrentTrackId(null);
          setIsPlaying(false);
          console.warn("[audio] unable to play track:", trackId, srcs);
        }
      });
    }

    const start = performance.now();
    const from = player.volume;

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      player.volume = from + (target - from) * progress;

      if (progress < 1) {
        fadesRef.current.set(trackId, requestAnimationFrame(step));
      } else {
        clearFade(trackId);
      }
    };

    fadesRef.current.set(trackId, requestAnimationFrame(step));
  };

  const playTrack = (trackId) => {
    if (!trackId) {
      return;
    }

    const track = getTrack(trackId);
    if (!track) {
      return;
    }

    if (currentTrackIdRef.current === trackId && isPlayingRef.current) {
      return;
    }

    playersRef.current.forEach((player, existingId) => {
      if (existingId !== trackId && !player.paused) {
        fadeOut(existingId, { pauseAfter: true });
      }
    });

    fadeIn(trackId, { targetVolume: track.volume ?? DEFAULT_VOLUME });
  };

  const stopAll = () => {
    playersRef.current.forEach((player, trackId) => {
      fadeOut(trackId, { pauseAfter: true });
    });

    setCurrentTrackId(null);
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const nextMuted = !mutedRef.current;
    mutedRef.current = nextMuted;
    setIsMutedState(nextMuted);

    playersRef.current.forEach((player) => {
      player.muted = nextMuted;
    });
  };

  useEffect(() => {
    return () => {
      fadesRef.current.forEach((frame) => {
        cancelAnimationFrame(frame);
      });

      playersRef.current.forEach((player) => {
        player.pause();
      });

      playersRef.current.clear();
      fadesRef.current.clear();
    };
  }, []);

  const currentTrack = currentTrackId ? getTrack(currentTrackId) : null;

  return {
    currentTrack,
    currentTrackId,
    isPlaying,
    isMuted,
    playTrack,
    stopAll,
    toggleMute,
    preloadAll,
  };
}
