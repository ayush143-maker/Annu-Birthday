import { useRef } from "react";
import { siteContent } from "../data/content";
import {
  IconArrowLeft,
  IconArrowRight,
  IconConfetti,
  IconReplay,
} from "./icons.jsx";

export default function ExperienceShell({
  flow,
  hasEntered,
  onNext,
  onBack,
  onPrev,
  onReplay,
  onConfetti,
  children,
}) {
  const touchStart = useRef(null);

  const handleBack = onBack || onPrev;
  const isFinale = flow.page.id === "finale";

  const onTouchStart = (event) => {
    touchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const onTouchEnd = (event) => {
    if (!touchStart.current) {
      return;
    }

    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;

    touchStart.current = null;

    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) {
      return;
    }

    if (event.target.closest && event.target.closest("[data-no-page-swipe]")) {
      return;
    }

    if (!hasEntered) {
      return;
    }

    if (dx < 0) {
      if (!isFinale) {
        onNext();
      }
    } else if (handleBack) {
      handleBack();
    }
  };

  return (
    <div className="shell-screen" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(200,166,107,0.10),transparent_62%)]"
      />

      <div className="safe-top absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 md:px-6">
        {hasEntered && flow.hasPrev ? (
          <button
            type="button"
            aria-label="Go back"
            onClick={handleBack}
            className="grid h-10 w-10 place-items-center rounded-full border border-cocoa/15 bg-cream/80 text-cocoa/80 shadow-soft transition hover:border-gold/50 active:scale-95"
          >
            <IconArrowLeft className="h-4 w-4" />
          </button>
        ) : (
          <span className="h-10 w-10" />
        )}

        {hasEntered ? (
          <button
            type="button"
            aria-label="Throw confetti"
            onClick={onConfetti}
            className="grid h-10 w-10 place-items-center rounded-full border border-cocoa/15 bg-cream/80 text-cocoa/80 shadow-soft transition hover:border-gold/50 active:scale-95"
          >
            <IconConfetti className="h-4 w-4" />
          </button>
        ) : (
          <span className="h-10 w-10" />
        )}
      </div>

      <main className="relative z-10 min-h-0 flex-1 overflow-hidden">
        <section
          key={flow.page.id}
          data-page-shell
          className="page-enter relative flex h-full min-h-0 items-center justify-center px-4 pb-24 pt-16 md:px-10"
        >
          {children}
        </section>
      </main>

      <div className="safe-bottom absolute inset-x-0 bottom-0 z-30 flex justify-center pb-1">
        {hasEntered ? (
          isFinale ? (
            <button type="button" onClick={onReplay} className="capsule-next">
              <IconReplay className="h-4 w-4" />
              {siteContent.finale.replayCta}
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              disabled={!flow.hasNext}
              className="capsule-next disabled:opacity-40"
            >
              <span>{siteContent.ui.nextLabel}</span>
              <span className="text-[10px] tracking-[0.18em] text-ivory/60">
                {String(flow.pageIndex + 1).padStart(2, "0")} /{" "}
                {String(flow.pageCount).padStart(2, "0")}
              </span>
              <IconArrowRight className="h-4 w-4" />
            </button>
          )
        ) : null}
      </div>
    </div>
  );
}
