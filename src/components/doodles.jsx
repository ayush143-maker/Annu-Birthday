const doodleProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DoodleUnderline({ className = "" }) {
  return (
    <svg viewBox="0 0 150 10" className={className} aria-hidden="true" focusable="false" {...doodleProps}>
      <path d="M3 6.5c24-3.5 47 3 71-1.5s49 2.5 73-2" />
    </svg>
  );
}

export function DoodleSquiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 56 12" className={className} aria-hidden="true" focusable="false" {...doodleProps}>
      <path d="M2 8c5-7 9 7 14 0s9 7 14 0 9 7 14 0 6 4 10 1" />
    </svg>
  );
}

export function DoodleArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 40 34" className={className} aria-hidden="true" focusable="false" {...doodleProps}>
      <path d="M5 4c10 2 20 8 24 22" />
      <path d="M22 22l7 4 3-8" />
    </svg>
  );
}

export function DoodleStar({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...doodleProps}>
      <path d="M12 3.4l2.2 5.4 5.6.5-4.3 3.8 1.3 5.6-4.8-3-4.8 3 1.3-5.6-4.3-3.8 5.6-.5z" />
    </svg>
  );
}

export function DoodleHeart({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...doodleProps}>
      <path d="M12 19.6C8 16.6 4.9 13.9 4.9 10.8c0-2.2 1.7-3.9 3.8-3.9 1.3 0 2.5.6 3.3 1.7.8-1.1 2-1.7 3.3-1.7 2.1 0 3.8 1.7 3.8 3.9 0 3.1-3.1 5.8-7.1 8.8z" />
    </svg>
  );
}
