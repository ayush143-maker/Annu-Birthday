import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import { gsap } from "../utils/gsap";
import {
  IconArrowLeft,
  IconArrowRight,
  IconSoundOff,
  IconSoundOn,
} from "./icons.jsx";
import { ControlButton, PageLabel } from "./ui.jsx";

export default function ExperienceShell({
  flow,
  audio,
  hasEntered,
  onNext,
  onPrev,
  children,
}) {
  const pageShellRef = useRef(null);
  const veilRef = useRef(null);

  useEffect(() => {
    const pageElement = pageShellRef.current;
    const veilElement = veilRef.current;

    if (!pageElement || !veilElement) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pageDuration = reducedMotion ? 0.01 : 0.7;
    const veilDuration = reducedMotion ? 0.01 : 0.55;

    const timeline = gsap.timeline();

    timeline.fromTo(
      veilElement,
      {
        autoAlpha: 0.55,
      },
      {
        autoAlpha: 0,
        duration: veilDuration,
        ease: "power2.out",
      },
      0
    );

    timeline.fromTo(
      pageElement,
      {
        autoAlpha: 0,
        y: 18,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: pageDuration,
        ease: "power2.out",
        clearProps: "transform",
      },
      0
    );

    return () => {
      timeline.kill();
    };
  }, [flow.page.id]);

  return (
    <div className="shell-screen">
      <div
        ref={veilRef}
        data-transition-veil
        className="pointer-events-none absolute inset-0 z-40 bg-ivory/95 opacity-0"
      />

      <header className="relative z-20 flex items-start justify-between px-5 pb-2 pt-5 md:px-10 md:pt-7">
        <div>
          <PageLabel>{siteContent.brand.name}</PageLabel>
          <p className="mt-1 hidden font-hand text-lg text-mutedBrown sm:block md:text-xl">
            {siteContent.brand.tagline}
          </p>
        </div>

        <div className="text-right">
          <PageLabel>{flow.page.label}</PageLabel>
          <p className="mt-1 text-[11px] tracking-widest2 text-mutedBrown/70">
            {String(flow.pageIndex + 1).padStart(2, "0")} /{" "}
            {String(flow.pageCount).padStart(2, "0")}
          </p>
        </div>
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-hidden">
        <section
          ref={pageShellRef}
          key={flow.page.id}
          data-page-shell
          className="relative flex h-full min-h-0 items-center justify-center px-5 py-4 md:px-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-1/2 h-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
          />

          {children}
        </section>
      </main>

      <footer className="relative z-20 flex items-center justify-between gap-3 px-5 pb-6 pt-4 md:px-10">
        <div className="flex items-center gap-3">
          <ControlButton
            label="Previous page"
            onClick={onPrev}
            disabled={!hasEntered || !flow.hasPrev}
          >
            <IconArrowLeft />
          </ControlButton>

          <ControlButton
            label="Next page"
            onClick={onNext}
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
