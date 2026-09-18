export default function CakeScene({ lit = false, wished = false, onMakeWish }) {
  return (
    <button
      type="button"
      onClick={onMakeWish}
      disabled={wished}
      aria-label="Make a wish"
      className="group relative mx-auto block w-full max-w-[320px] rounded-[36px] border border-transparent p-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold/60 md:max-w-[380px]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-10 bottom-6 h-20 rounded-full bg-gold/20 blur-3xl transition-opacity duration-700 ${
          lit ? "opacity-100" : "opacity-25"
        }`}
      />

      <svg
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden="true"
        className="relative w-full drop-shadow-[0_24px_45px_rgba(70,52,34,0.14)]"
      >
        <defs>
          <linearGradient
            id="cake-body"
            x1="180"
            y1="112"
            x2="180"
            y2="298"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBF7EF" />
            <stop offset="1" stopColor="#E7D6BE" />
          </linearGradient>

          <linearGradient
            id="cake-top"
            x1="180"
            y1="112"
            x2="180"
            y2="242"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFDF8" />
            <stop offset="1" stopColor="#F1E4CE" />
          </linearGradient>
        </defs>

        <ellipse cx="180" cy="308" rx="126" ry="18" fill="#DCCDB6" opacity="0.42" />
        <ellipse
          cx="180"
          cy="298"
          rx="138"
          ry="20"
          fill="#F8F1E5"
          stroke="#C8A66B"
          strokeOpacity="0.28"
        />

        <rect
          x="74"
          y="222"
          width="212"
          height="76"
          rx="26"
          fill="url(#cake-body)"
          stroke="#C8A66B"
          strokeOpacity="0.22"
        />
        <rect x="74" y="222" width="212" height="22" rx="11" fill="url(#cake-top)" opacity="0.92" />

        <rect
          x="102"
          y="164"
          width="156"
          height="66"
          rx="24"
          fill="url(#cake-body)"
          stroke="#C8A66B"
          strokeOpacity="0.22"
        />
        <rect x="102" y="164" width="156" height="20" rx="10" fill="url(#cake-top)" opacity="0.92" />

        <rect
          x="128"
          y="112"
          width="104"
          height="60"
          rx="22"
          fill="url(#cake-body)"
          stroke="#C8A66B"
          strokeOpacity="0.22"
        />
        <rect x="128" y="112" width="104" height="18" rx="9" fill="url(#cake-top)" opacity="0.94" />

        <g fill="#C8A66B" opacity="0.32">
          <circle cx="102" cy="262" r="3" />
          <circle cx="136" cy="270" r="2.5" />
          <circle cx="180" cy="264" r="3" />
          <circle cx="224" cy="270" r="2.5" />
          <circle cx="258" cy="262" r="3" />
        </g>

        <g fill="#C8A66B" opacity="0.24">
          <circle cx="126" cy="196" r="2.5" />
          <circle cx="180" cy="202" r="3" />
          <circle cx="234" cy="196" r="2.5" />
        </g>

        <rect x="152" y="76" width="7" height="38" rx="3.5" fill="#C8A66B" opacity="0.9" />
        <rect x="176.5" y="70" width="7" height="44" rx="3.5" fill="#B89A67" />
        <rect x="201" y="76" width="7" height="38" rx="3.5" fill="#C8A66B" opacity="0.9" />

        {lit ? (
          <g className="svg-glow">
            <path
              d="M155.5 62c4.8 5.4 4.8 10.3 0 13.8-4.8-3.5-4.8-8.4 0-13.8z"
              fill="#E4CE9D"
              className="animate-glowPulse"
            />
            <path
              d="M155.5 66c2.6 3 2.6 5.8 0 7.8-2.6-2-2.6-4.8 0-7.8z"
              fill="#FFFDF8"
              opacity="0.82"
            />

            <path
              d="M180 54c5.3 6 5.3 11.6 0 15.5-5.3-3.9-5.3-9.5 0-15.5z"
              fill="#E4CE9D"
              className="animate-glowPulse"
            />
            <path
              d="M180 59c2.9 3.3 2.9 6.5 0 8.7-2.9-2.2-2.9-5.4 0-8.7z"
              fill="#FFFDF8"
              opacity="0.84"
            />

            <path
              d="M204.5 62c4.8 5.4 4.8 10.3 0 13.8-4.8-3.5-4.8-8.4 0-13.8z"
              fill="#E4CE9D"
              className="animate-glowPulse"
            />
            <path
              d="M204.5 66c2.6 3 2.6 5.8 0 7.8-2.6-2-2.6-4.8 0-7.8z"
              fill="#FFFDF8"
              opacity="0.82"
            />
          </g>
        ) : null}
      </svg>
    </button>
  );
}
