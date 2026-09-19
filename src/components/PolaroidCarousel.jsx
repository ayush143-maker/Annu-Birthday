import { useRef } from "react";
import PolaroidFrame from "./PolaroidFrame.jsx";

export default function PolaroidCarousel({ frames = [] }) {
  const cardRefs = useRef([]);

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
