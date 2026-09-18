import { IconSparkle } from "./icons.jsx";

const sparkles = [
  {
    className: "left-[4%] top-[16%] h-4 w-4 text-gold/70 animate-floatSoft",
  },
  {
    className: "right-[8%] top-[12%] h-5 w-5 text-softGold/70 animate-glowPulse",
  },
  {
    className: "left-[12%] bottom-[18%] h-3.5 w-3.5 text-gold/50 animate-floatSoft",
  },
  {
    className: "right-[14%] bottom-[22%] h-4 w-4 text-gold/60 animate-glowPulse",
  },
  {
    className: "left-[42%] top-[4%] h-3 w-3 text-gold/45 animate-floatSoft",
  },
  {
    className: "right-[36%] bottom-[6%] h-3 w-3 text-softGold/55 animate-glowPulse",
  },
];

export default function SparkleLayer({ active = false }) {
  if (!active) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      {sparkles.map((sparkle, index) => (
        <span key={index} className={`absolute ${sparkle.className}`}>
          <IconSparkle className="svg-glow h-full w-full" />
        </span>
      ))}
    </div>
  );
}
