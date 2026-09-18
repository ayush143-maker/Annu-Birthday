import { useCallback, useEffect, useRef, useState } from "react";
import { siteContent } from "./data/content";
import { useAudioDirector } from "./hooks/useAudioDirector";
import { usePageFlow } from "./hooks/usePageFlow";
import { gsap } from "./utils/gsap";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 12h14.5" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}

function IconArrowLeft({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M19.5 12H5" />
      <path d="M10.5 6.5 5 12l5.5 5.5" />
    </svg>
  );
}

function IconReplay({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4.75 4.5v4.25H9" />
    </svg>
  );
}

function IconSoundOn({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 10v4" />
      <path d="M8.5 7.5v9" />
      <path d="M12.5 5v14" />
      <path d="M16.5 8.5v7" />
      <path d="M20.5 10.5v3" />
    </svg>
  );
}

function IconSoundOff({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 10v4" />
      <path d="M8.5 7.5v9" />
      <path d="M12.5 5v14" />
      <path d="M16.5 8.5v7" />
      <path d="M20.5 10.5v3" />
      <path d="M4 4l17 17" />
    </svg>
  );
}

function IconSparkle({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M12 3.5l1.8 5.7 5.7 1.8-5.7 1.8L12 18.5l-1.8-5.7-5.7-1.8 5.7-1.8L12 3.5z" />
      <path
        d="M18.75 15.5l.7 2.05 2.05.7-2.05.7-.7 2.05-.7-2.05-2.05-.7 2.05-.7.7-2.05z"
        opacity="0.7"
      />
    </svg>
  );
}

function IconLock({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <rect x="5.5" y="10.75" width="13" height="8.75" rx="2.5" />
      <path d="M8.75 10.75V8.5a3.25 3.25 0 0 1 6.5 0v2.25" />
    </svg>
  );
}

function ControlButton({ label, onClick, disabled = false, active = false, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`grid h-11 w-11 place-items-center rounded-full border bg-cream/75 text-cocoa/80 shadow-soft transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 ${
        disabled
          ? "cursor-not-allowed opacity-35"
          : "hover:border-gold/55 hover:text-cocoa"
      } ${active ? "border-gold/60 shadow-glow" : "border-cocoa/15"}`}
    >
      {children}
    </button>
  );
}

function PagePreview({ page, hasEntered, onEnter, onNext, onReplay }) {
  if (page.id === "opening") {
    return (
      <div className="relative mx-auto w-full max-w-3xl text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-14 rounded-[56px] bg-gold/10 blur-3xl"
        />

        <div className="relative">
          <IconSparkle className="svg-glow mx-auto h-14 w-14 text-gold animate-floatSoft" />

          <p className="page-label mt-8">{page.label}</p>

          <h1 className="display-heading text-glow mt-5 text-5xl leading-[1.08] md:text-7xl">
            {page.title}
          </h1>

          <p className="mt-5 font-hand text-2xl text-mutedBrown md:text-3xl">
            {page.subtitle}
          </p>

          <p className="mt-3 text-xs uppercase tracking-widest2 text-mutedBrown/70">
            {siteContent.ui.openingHint}
          </p>

          <div className="mt-10 flex justify-center">
            {!hasEntered ? (
              <button
                type="button"
                onClick={onEnter}
                className="group relative inline-flex items-center gap-3 rounded-full border border-gold/40 bg-cocoa px-8 py-4 text-xs font-medium uppercase tracking-widest2 text-ivory shadow-paper transition hover:border-gold/70 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 md:text-sm"
              >
                <span className="relative z-10">{page.cta}</span>
                <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                className="group relative inline-flex items-center gap-3 rounded-full border border-gold/40 bg-cocoa px-8 py-4 text-xs font-medium uppercase tracking-widest2 text-ivory shadow-paper transition hover:border-gold/70 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 md:text-sm"
              >
                <span className="relative z-10">Continue the memory book</span>
                <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (page.id === "finale") {
    return (
      <div className="relative mx-auto w-full max-w-3xl text-center">
        <IconSparkle className="svg-glow mx-auto h-12 w-12 text-gold" />

        <h2 className="display-heading text-glow mt-6 text-5xl leading-[1.08] md:text-6xl">
          {page.title}
        </h2>

        <p className="mt-5 font-hand text-2xl text-mutedBrown md:text-3xl">
          {page.subtitle}
        </p>

        <p className="mt-4 font-hand text-xl text-mutedBrown md:text-2xl">
          {siteContent.finale.extraLine}
        </p>

        <button
          type="button"
          onClick={onReplay}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-cocoa/20 bg-cream/80 px-7 py-4 text-xs uppercase tracking-widest2 text-cocoa transition hover:border-gold/55 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70"
        >
          <IconReplay className="h-4 w-4" />
          {siteContent.finale.replayCta}
        </button>
      </div>
    );
  }

  return (
    <div className="paper-card relative mx-auto w-full max-w-3xl px-7 pb-10 pt-12 text-center md:px-12 md:pb-14 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 -top-8 h-16 rounded-full bg-gold/10 blur-2xl"
      />

      {page.id === "secret-box" ? (
        <IconLock className="svg-glow mx-auto h-10 w-10 text-gold" />
      ) : (
        <IconSparkle className="svg-glow mx-auto h-10 w-10 text-gold" />
      )}

      <p className="page-label mt-6">{page.label}</p>

      <h2 className="display-heading text-glow mt-4 text-4xl leading-tight md:text-6xl">
        {page.title}
      </h2>

      <p className="mt-4 font-hand text-2xl text-mutedBrown md:text-3xl">
        {page.subtitle}
      </p>

      <div className="hairline mx-auto mt-7 max-w-[120px]" />

      <p className="mt-6 text-xs uppercase tracking-widest2 text-mutedBrown/70">
        {siteContent.ui.sectionShellReady}
      </p>
    </div>
  );
}

export default function App() {
  const audio = useAudioDirector();
  const flow = usePageFlow();

  const [hasEntered, setHasEntered] = useState(false);
  const mainRef = useRef(null);

  const { page } = flow;

  const handleEnter = useCallback(() => {
    setHasEntered(true);

    if (page.musicTrack) {
      audio.playTrack(page.musicTrack);
    }
  }, [audio.playTrack, page.musicTrack]);

  const handleNext = useCallback(() => {
    if (!hasEntered || !flow.hasNext) {
      return;
    }

    flow.next();
  }, [flow, hasEntered]);

  const handlePrev = useCallback(() => {
    if (!hasEntered || !flow.hasPrev) {
      return;
    }

    flow.prev();
  }, [flow, hasEntered]);

  const handleReplay = useCallback(() => {
    audio.stopAll();
    setHasEntered(false);
    flow.replay();
  }, [audio.stopAll, flow]);

  useEffect(() => {
    if (!hasEntered) {
      return;
    }

    if (page.musicTrack) {
      audio.playTrack(page.musicTrack);
    }
  }, [audio.playTrack, hasEntered, page.id, page.musicTrack]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-page-shell]",
        {
          autoAlpha: 0,
          y: 18,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, [page.id]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!hasEntered) {
        return;
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleNext, handlePrev, hasEntered]);

  return (
    <div className="shell-screen">
      <header className="relative z-20 flex items-start justify-between px-5 pb-2 pt-5 md:px-10 md:pt-7">
        <div>
          <p className="page-label">{siteContent.brand.name}</p>
          <p className="mt-1 hidden font-hand text-lg text-mutedBrown sm:block md:text-xl">
            {siteContent.brand.tagline}
          </p>
        </div>

        <div className="text-right">
          <p className="page-label">{page.label}</p>
          <p className="mt-1 text-[11px] tracking-widest2 text-mutedBrown/70">
            {String(flow.pageIndex + 1).padStart(2, "0")} /{" "}
            {String(flow.pageCount).padStart(2, "0")}
          </p>
        </div>
      </header>

      <main ref={mainRef} className="relative z-10 flex-1 overflow-hidden">
        <section
          key={page.id}
          data-page-shell
          className="relative flex h-full items-center justify-center px-5 md:px-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-1/2 h-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
          />

          <PagePreview
            page={page}
            hasEntered={hasEntered}
            onEnter={handleEnter}
            onNext={handleNext}
            onReplay={handleReplay}
          />
        </section>
      </main>

      <footer className="relative z-20 flex items-center justify-between gap-4 px-5 pb-6 pt-4 md:px-10">
        <div className="flex items-center gap-3">
          <ControlButton
            label="Previous page"
            onClick={handlePrev}
            disabled={!hasEntered || !flow.hasPrev}
          >
            <IconArrowLeft />
          </ControlButton>

          <ControlButton
            label="Next page"
            onClick={handleNext}
            disabled={!hasEntered || !flow.hasNext}
          >
            <IconArrowRight />
          </ControlButton>
        </div>

        <div className="flex items-center gap-2">
          {flow.pages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.label}`}
              aria-current={index === flow.pageIndex ? "step" : undefined}
              disabled={!hasEntered}
              onClick={() => flow.goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === flow.pageIndex
                  ? "w-8 bg-gold/80"
                  : "w-2 bg-cocoa/20 hover:bg-cocoa/40"
              } ${!hasEntered ? "opacity-30" : ""}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <p className="hidden text-[10px] uppercase tracking-widest2 text-mutedBrown/60 lg:block">
            {audio.currentTrack ? audio.currentTrack.label : "Music"}
          </p>

          <ControlButton
            label={audio.isMuted ? "Unmute music" : "Mute music"}
            onClick={audio.toggleMute}
            active={audio.isPlaying && !audio.isMuted}
          >
            {audio.isMuted ? <IconSoundOff /> : <IconSoundOn />}
          </ControlButton>
        </div>
      </footer>
    </div>
  );
}
