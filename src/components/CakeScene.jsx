export default function CakeScene({ lit = false, blew = false, onTap }) {
  return (
    <button
      type="button"
      onClick={onTap}
      aria-label={lit ? "Make a wish" : "Light the candles"}
      className="relative mx-auto block w-full max-w-[230px] transition active:scale-[0.98] md:max-w-[310px]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-6 top-1/2 h-24 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl transition-opacity duration-700 ${
          lit ? "opacity-90" : "opacity-0"
        }`}
      />

      <svg
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
        className="relative w-full"
      >
        <defs>
          <linearGradient
            id="tier-body"
            x1="180"
            y1="140"
            x2="180"
            y2="302"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBF7EF" />
            <stop offset="1" stopColor="#EAD9C0" />
          </linearGradient>

          <linearGradient
            id="tier-icing"
            x1="180"
            y1="140"
            x2="180"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFDF8" />
            <stop offset="1" stopColor="#F3E7D2" />
          </linearGradient>
        </defs>

        <ellipse cx="180" cy="344" rx="46" ry="8" fill="#DCCDB6" opacity="0.45" />
        <path
          d="M168 306h24v30c0 4-5 6-12 6s-12-2-12-6z"
          fill="#E9DFD0"
          stroke="#C8A66B"
          strokeOpacity="0.3"
        />
        <ellipse
          cx="180"
          cy="304"
          rx="112"
          ry="12"
          fill="#F8F1E5"
          stroke="#C8A66B"
          strokeOpacity="0.35"
        />

        <rect
          x="84"
          y="212"
          width="192"
          height="90"
          rx="18"
          fill="url(#tier-body)"
          stroke="#C8A66B"
          strokeOpacity="0.25"
        />
        <path
          d="M84 212h192v10q-12 18-24 0q-12 18-24 0q-12 18-24 0q-12 18-24 0q-12 18-24 0q-12 18-24 0q-12 18-24 0q-12 18-24 0z"
          fill="url(#tier-icing)"
        />
        <g fill="#C98A8A" opacity="0.45">
          <circle cx="126" cy="266" r="3" />
          <circle cx="180" cy="276" r="2.6" />
          <circle cx="234" cy="264" r="3" />
        </g>
        <g fill="#9CA88B" opacity="0.4">
          <circle cx="152" cy="282" r="2.4" />
          <circle cx="208" cy="284" r="2.4" />
        </g>

        <rect
          x="116"
          y="152"
          width="128"
          height="62"
          rx="16"
          fill="url(#tier-body)"
          stroke="#C8A66B"
          strokeOpacity="0.25"
        />
        <path
          d="M116 152h128v9q-16 18-32 0q-16 18-32 0q-16 18-32 0q-16 18-32 0z"
          fill="url(#tier-icing)"
        />

        <rect x="149" y="112" width="7" height="42" rx="3.5" fill="#C98A8A" />
        <rect x="176.5" y="104" width="7" height="50" rx="3.5" fill="#C8A66B" />
        <rect x="204" y="112" width="7" height="42" rx="3.5" fill="#9CA88B" />
        <path
          d="M152.5 112v-5M180 104v-5M207.5 112v-5"
          stroke="#7D6852"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {lit && !blew ? (
          <g className="svg-glow">
            <path
              d="M152.5 92c4.6 5.2 4.6 9.9 0 13.2-4.6-3.3-4.6-8 0-13.2z"
              fill="#E4CE9D"
              className="animate-flicker"
            />
            <path
              d="M152.5 96c2.5 2.9 2.5 5.5 0 7.4-2.5-1.9-2.5-4.5 0-7.4z"
              fill="#FFFDF8"
              opacity="0.85"
            />
            <path
              d="M180 84c5 5.8 5 11 0 14.7-5-3.7-5-8.9 0-14.7z"
              fill="#E4CE9D"
              className="animate-flicker"
            />
            <path
              d="M180 88.5c2.7 3.2 2.7 6.1 0 8.2-2.7-2.1-2.7-5 0-8.2z"
              fill="#FFFDF8"
              opacity="0.85"
            />
            <path
              d="M207.5 92c4.6 5.2 4.6 9.9 0 13.2-4.6-3.3-4.6-8 0-13.2z"
              fill="#E4CE9D"
              className="animate-flicker"
            />
            <path
              d="M207.5 96c2.5 2.9 2.5 5.5 0 7.4-2.5-1.9-2.5-4.5 0-7.4z"
              fill="#FFFDF8"
              opacity="0.85"
            />
          </g>
        ) : null}

        {blew ? (
          <g
            stroke="#7D6852"
            strokeOpacity="0.4"
            strokeWidth="1.3"
            strokeLinecap="round"
            className="animate-floatSoft"
          >
            <path d="M152.5 104c-3-5 3-8 0-13" />
            <path d="M180 96c-3-5 3-8 0-13" />
            <path d="M207.5 104c-3-5 3-8 0-13" />
          </g>
        ) : null}
      </svg>
    </button>
  );
}
