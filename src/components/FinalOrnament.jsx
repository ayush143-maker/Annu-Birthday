export default function FinalOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`svg-glow text-gold ${className}`}
    >
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1"
      />

      <circle
        cx="60"
        cy="60"
        r="33"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="4 7"
      />

      <path
        d="M60 32.5l3.4 10.4 10.4 3.4-10.4 3.4L60 60l-3.4-10.3-10.4-3.4 10.4-3.4L60 32.5z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />

      <path
        d="M84 72.5l1.2 3.4 3.4 1.2-3.4 1.2-1.2 3.4-1.2-3.4-3.4-1.2 3.4-1.2 1.2-3.4z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity="0.65"
      />

      <path
        d="M36.5 74l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1 1-2.8z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}
