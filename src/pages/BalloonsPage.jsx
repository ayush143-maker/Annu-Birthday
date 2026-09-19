import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/content";
import { CaptionTag, HandwrittenNote } from "../components/ui.jsx";
import { DoodleStar } from "../components/doodles.jsx";

const BALLOON_COLORS = [
  "#C98A8A",
  "#C8A66B",
  "#9CA88B",
  "#C7D6E8",
  "#E4CE9D",
  "#DCCDB6",
];

function BalloonShape({ color }) {
  return (
    <svg
      viewBox="0 0 80 120"
      fill="none"
      aria-hidden="true"
      className="h-[12vh] w-auto md:h-[16vh]"
    >
      <ellipse cx="40" cy="42" rx="26" ry="32" fill={color} />
      <ellipse cx="31" cy="29" rx="7" ry="10" fill="#FFFFFF" opacity="0.35" />
      <path d="M40 74l-5 7h10z" fill={color} />
      <path
        d="M40 81c7 10-7 16 0 27"
        stroke="#7D6852"
        strokeOpacity="0.5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BalloonsPage({ page, onConfetti }) {
  const compliments = siteContent.balloons.compliments;
  const [popped, setPopped] = useState(() => compliments.map(() => false));
  const confettiFired = useRef(false);

  const allPopped = popped.every(Boolean);
  const poppedCount = popped.filter(Boolean).length;

  useEffect(() => {
    if (allPopped && !confettiFired.current) {
      confettiFired.current = true;

      if (onConfetti) {
        onConfetti();
      }
    }
  }, [allPopped, onConfetti]);

  const pop = (index) => {
    setPopped((current) =>
      current.map((value, i) => (i === index ? true : value))
    );
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-4 md:gap-6">
      <header className="text-center">
        <h2 className="display-heading text-glow text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.balloons.heading}
        </p>
      </header>

      <div data-no-page-swipe className="grid w-full grid-cols-3 gap-2 md:gap-5">
        {compliments.map((compliment, index) => (
          <button
            key={compliment}
            type="button"
            onClick={() => pop(index)}
            disabled={popped[index]}
            aria-label={`Pop balloon ${index + 1}`}
            className="flex min-h-[16vh] items-center justify-center transition active:scale-95 md:min-h-[20vh]"
          >
            {popped[index] ? (
              <span className="animate-popIn">
                <CaptionTag className="rotate-[-2deg]">{compliment}</CaptionTag>
              </span>
            ) : (
              <BalloonShape color={BALLOON_COLORS[index % BALLOON_COLORS.length]} />
            )}
          </button>
        ))}
      </div>

      <div className="flex min-h-[40px] flex-col items-center gap-1">
        {allPopped ? (
          <div className="flex items-center gap-2">
            <DoodleStar className="h-5 w-5 text-gold" />
            <HandwrittenNote className="text-xl md:text-2xl">
              {siteContent.balloons.allPopped}
            </HandwrittenNote>
            <DoodleStar className="h-5 w-5 text-gold" />
          </div>
        ) : (
          <p className="font-hand text-lg text-mutedBrown/75">
            {poppedCount} / {compliments.length} popped
          </p>
        )}
      </div>
    </div>
  );
}
