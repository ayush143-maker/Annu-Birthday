import { useCallback, useEffect, useRef, useState } from "react";
import { siteContent } from "../data/content";

const DEFAULT_VOLUME = 0.88;
const FADE_DURATION = 900;

export function useAudioDirector() {
  const playersRef = useRef(new Map());
  const fadesRef = useRef(new Map());
  const mutedRef = useRef(false);
  const currentTrackIdRef = useRef(null);
  const isPlayingRef = useRef(false);

  const [currentTrackId, setCurrentTrackIdState] = useState(null);
  const [isPlaying, setIsPlayingState] = useState(false);
  const [isMuted, setIsMutedState] = useState(false);

  const getTrack = useCallback((trackId) => {
    return siteContent.music.tracks.find((track) => track.id === trackId) || null;
  }, []);

  const setCurrentTrackId = useCallback((trackId) => {
    currentTrackIdRef.current = trackId;
    setCurrentTrackIdState(trackId);
  }, []);

  const setIsPlaying = useCallback((playing) => {
    isPlayingRef.current = playing;
    setIsPlayingState(playing);
  }, []);

  const clearFade = useCallback((trackId) => {
    const frame = fadesRef.current.get(trackId);
    if (frame) {
      cancelAnimationFrame(frame);
    }
    fadesRef.current.delete(trackId);
  }, []);

  const createPlayer = useCallback((track) => {
    const player = new Audio(track.src);
    player.loop = true;
    player.preload = "auto";
    player.volume = 0;
    return player;
  }, []);

  const getPlayer = useCallback(
    (trackId) => {
      if (!playersRef.current.has(trackId)) {
        const track = getTrack(trackId);
        if (!track) {
          return null;
        }
        playersRef.current.set(trackId, createPlayer(track));
      }

      return playersRef.current.get(trackId);
    },
    [createPlayer, getTrack]
  );

  const fadeOut = useCallback(
    (trackId, { duration = FADE_DURATION, pauseAfter = false } = {}) => {
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
    },
    [clearFade]
  );

  const fadeIn = useCallback(
    (trackId, { duration = FADE_DURATION, targetVolume = DEFAULT_VOLUME } = {}) => {
      const player = getPlayer(trackId);
      if (!player) {
        return;
      }

      clearFade(trackId);

      player.muted = mutedRef.current;
      setCurrentTrackId(trackId);
      setIsPlaying(true);

      const playPromise = player.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          player.pause();
          setCurrentTrackId(null);
          setIsPlaying(false);
        });
      }

      const start = performance.now();
      const from = player.volume;

      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        player.volume = from + (targetVolume - from) * progress;

        if (progress < 1) {
          fadesRef.current.set(trackId, requestAnimationFrame(step));
        } else {
          clearFade(trackId);
        }
      };

      fadesRef.current.set(trackId, requestAnimationFrame(step));
    },
    [clearFade, getPlayer, setCurrentTrackId, setIsPlaying]
  );

  const playTrack = useCallback(
    (trackId) => {
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

      playersRef.current.forEach((player, existingTrackId) => {
        if (existingTrackId !== trackId && !player.paused) {
          fadeOut(existingTrackId, { pauseAfter: true });
        }
      });

      fadeIn(trackId, { targetVolume: track.volume ?? DEFAULT_VOLUME });
    },
    [fadeIn, fadeOut, getTrack]
  );

  const stopAll = useCallback(() => {
    playersRef.current.forEach((player, trackId) => {
      fadeOut(trackId, { pauseAfter: true });
    });

    setCurrentTrackId(null);
    setIsPlaying(false);
  }, [fadeOut, setCurrentTrackId, setIsPlaying]);

  const toggleMute = useCallback(() => {
    const nextMuted = !mutedRef.current;
    mutedRef.current = nextMuted;
    setIsMutedState(nextMuted);

    playersRef.current.forEach((player) => {
      player.muted = nextMuted;
    });
  }, []);

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
  };
}
