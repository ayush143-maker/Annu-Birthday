import { useEffect, useRef, useState } from "react";
import { IconCamera } from "./icons.jsx";
import { DoodleHeart } from "./doodles.jsx";

export default function StackedCardCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [failed, setFailed] = useState({});
  const timer = useRef(null);

  const count = images.length;

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  if (!count) {
    return null;
  }

  const advance = () => {
    if (leaving) {
      return;
    }

    setLeaving(true);

    timer.current = setTimeout(() => {
      setIndex((value) => (value + 1) % count);
      setLeaving(false);
    }, 260);
  };

  const positionClass = (pos) => {
    switch (pos) {
      case 0:
        return "z-40 translate-y-0 rotate-[-1.5deg] scale-100 opacity-100";
      case 1:
        return "z-30 translate-y-4 rotate-[2deg] scale-[0.94] opacity-100";
      case 2:
        return "z-20 translate-y-8 rotate-[-2.5deg] scale-[0.89] opacity-90";
      case 3:
        return "z-10 translate-y-11 rotate-[3deg] scale-[0.85] opacity-60";
      default:
        return "z-0 translate-y-14 rotate-[-3.5deg] scale-[0.81] opacity-35";
    }
  };

  return (
    <div data-no-page-swipe className="mx-auto w-full">
      <div className="relative mx-auto aspect-[3/4] h-[38vh] md:h-[48vh]">
        {images.map((image, i) => {
          const pos = (i - index + count) % count;
          const isTop = pos === 0;

          return (
            <div
              key={image.id}
              className={`absolute inset-0 transition-all duration-300 ease-out ${positionClass(pos)}`}
              style={
                isTop && leaving
                  ? {
                      transform: "translate3d(55%, 0, 0) rotate(10deg)",
                      opacity: 0,
                    }
                  : undefined
              }
            >
              {isTop ? (
                <button
                  type="button"
                  onClick={advance}
                  aria-label="Next photo"
                  className="block h-full w-full rounded-[26px] border border-cream/80 bg-cream/90 p-2.5 shadow-paper transition active:scale-[0.98]"
                >
                  {failed[image.id] ? (
                    <div className="grid h-full w-full place-items-center rounded-[18px] bg-beige/40">
                      <IconCamera className="h-6 w-6 text-mutedBrown/60" />
                    </div>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      onError={() =>
                        setFailed((current) => ({ ...current, [image.id]: true }))
                      }
                      className="h-full w-full rounded-[18px] object-cover"
                    />
                  )}
                </button>
              ) : (
                <div className="grid h-full w-full place-items-center rounded-[26px] border border-powderDeep/50 bg-powder shadow-soft">
                  <DoodleHeart className="h-8 w-8 text-powderDeep/70" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-14 text-center font-hand text-xl text-mutedBrown/80 md:mt-16">
        {index + 1} / {count} — tap the photo
      </p>
    </div>
  );
}
