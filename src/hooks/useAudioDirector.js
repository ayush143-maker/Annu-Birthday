import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/content";

const DEFAULT_VOLUME = 0.9;
const FADE_MS = 420;
const FADE_STEPS = 6;

export function useAudioDirector() {
  const playersRef = useRef(new Map());
  const timersRef = useRef(new Map());
  const attemptRef = useRef({});
  const mutedRef = useRef(false);
  const currentTrackIdRef = useRef(null);
  const isPlayingRef = useRef(false);

  const [currentTrackId, setCurrentTrackIdState] = useState(null);
  const [isPlaying, setIsPlayingState] = useState(false);
  const [isMuted, setIsMutedState] = useState(false);

  const setCurrentTrackId = (id) => {
    currentTrackIdRef.current = id;
    setCurrentTrackIdState(id);
  };

  const setIsPlaying = (value) => {
    isPlayingRef.current = value;
    setIsPlayingState(value);
  };

  const getTrack = (id) => {
    return siteContent.music.tracks.find((track) => track.id === id) || null;
  };

  const srcListFor = (track) => {
    if (track.srcs && track.srcs.length) {
      return track.srcs;
    }
    return track.src ? [track.src] : [];
  };

  const clearTimer = (id) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearInterval(timer);
    }
    timersRef.current.delete(id);
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

  const ensurePlayer = (id, src) => {
    const existing = playersRef.current.get(id);

    if (existing && existing.dataset.src === src) {
      return existing;
    }

    if (existing) {
      existing.pause();
    }

    const player = createPlayer(src);
    playersRef.current.set(id, player);
    return player;
  };

  const ramp = (id, from, to, done) => {
    const player = playersRef.current.get(id);
    if (!player) {
      return;
    }

    clearTimer(id);

    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const progress = step / FADE_STEPS;
      player.volume = Math.max(0, Math.min(1, from + (to - from) * progress));

      if (step >= FADE_STEPS) {
        clearTimer(id);
        if (done) {
          done();
        }
      }
    }, FADE_MS / FADE_STEPS);

    timersRef.current.set(id, timer);
  };

  const fadeOut = (id, { pauseAfter = false } = {}) => {
    const player = playersRef.current.get(id);
    if (!player) {
      return;
    }

    ramp(id, player.volume, 0, () => {
      if (pauseAfter) {
        player.pause();
      }
    });
  };

  const startPlay = (id, targetVolume) => {
    const track = getTrack(id);
    if (!track) {
      return;
    }

    const srcs = srcListFor(track);
    if (!srcs.length) {
      return;
    }

    const attempt = Math.min(attemptRef.current[id] || 0, srcs.length - 1);
    const player = ensurePlayer(id, srcs[attempt]);

    clearTimer(id);

    player.muted = mutedRef.current;
    setCurrentTrackId(id);
    setIsPlaying(true);

    const target = Math.min(Math.max(targetVolume, 0), 1);

    const begin = () => {
      ramp(id, player.volume, target);
    };

    const playPromise = player.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(begin).catch((err) => {
        const name = err && err.name;

        if (name === "NotAllowedError") {
          setTimeout(() => {
            if (currentTrackIdRef.current === id) {
              player.play().then(begin).catch(() => {
                player.pause();
                setCurrentTrackId(null);
                setIsPlaying(false);
              });
            }
          }, 220);
          return;
        }

        if (attempt < srcs.length - 1) {
          attemptRef.current[id] = attempt + 1;
          playersRef.current.delete(id);
          startPlay(id, targetVolume);
        } else {
          player.pause();
          setCurrentTrackId(null);
          setIsPlaying(false);
          console.warn("[audio] unable to play track:", id, srcs, name);
        }
      });
    } else {
      begin();
    }
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

  const playTrack = (id) => {
    if (!id) {
      return;
    }

    const track = getTrack(id);
    if (!track) {
      return;
    }

    if (currentTrackIdRef.current === id && isPlayingRef.current) {
      const player = playersRef.current.get(id);
      if (player && player.paused) {
        player.play().catch(() => {});
      }
      return;
    }

    playersRef.current.forEach((player, existingId) => {
      if (existingId !== id && !player.paused) {
        fadeOut(existingId, { pauseAfter: true });
      }
    });

    startPlay(id, track.volume ?? DEFAULT_VOLUME);
  };

  const stopAll = () => {
    playersRef.current.forEach((player, id) => {
      fadeOut(id, { pauseAfter: true });
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
    const resumeIfStuck = () => {
      const id = currentTrackIdRef.current;
      if (!id || !isPlayingRef.current) {
        return;
      }

      const player = playersRef.current.get(id);
      if (player && player.paused) {
        player
          .play()
          .then(() => {
            ramp(id, player.volume, player.volume || DEFAULT_VOLUME);
          })
          .catch(() => {});
      }
    };

    window.addEventListener("pointerdown", resumeIfStuck, true);
    window.addEventListener("keydown", resumeIfStuck, true);

    return () => {
      window.removeEventListener("pointerdown", resumeIfStuck, true);
      window.removeEventListener("keydown", resumeIfStuck, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearInterval(timer));
      playersRef.current.forEach((player) => player.pause());
      playersRef.current.clear();
      timersRef.current.clear();
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
