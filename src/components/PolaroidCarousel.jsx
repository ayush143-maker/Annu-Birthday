import { useEffect, useRef } from "react";
import PolaroidFrame from "./PolaroidFrame.jsx";

export default function PolaroidCarousel({ frames = [] }) {
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const directionRef = useRef(1);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = null;
    const speed = 0.45;

    const tick = () => {
      if (!pausedRef.current) {
        const max = scroller.scrollWidth - scroller.clientWidth;
        let next = scroller.scrollLeft + speed * directionRef.current;

        if (next >= max) {
          next = max;
          directionRef.current = -1;
        }

        if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        scroller.scrollLeft = next;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      resumeTimerRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, 4000);
    };

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("wheel", pause, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("wheel", pause);
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const focusCard = (index) => {
    const next = (index + 1) % frames.length;
    const element = cardRefs.current[next];

    if (element && element.scrollIntoView) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollerRef}
        data-no-page-swipe
        className="snap-carousel no-scrollbar flex items-center gap-4 overflow-x-auto px-8 py-4 md:gap-6 md:px-14"
      >
        {frames.map((frame, index) => (
          <div
            key={frame.id}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            onClick={() => focusCard(index)}
            className="snap-card shrink-0 cursor-pointer"
          >
            <div className="transition active:scale-[0.98]">
              <PolaroidFrame
                image={frame.image}
                caption={frame.caption}
                ratioClass={frame.ratioClass}
                className={`${frame.widthClass} ${frame.tilt}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-ivory/90 to-transparent md:w-16"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ivory/90 to-transparent md:w-16"
      />
    </div>
  );
}
