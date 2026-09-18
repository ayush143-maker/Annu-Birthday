const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 12h14.5" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}

export function IconArrowLeft({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M19.5 12H5" />
      <path d="M10.5 6.5 5 12l5.5 5.5" />
    </svg>
  );
}

export function IconReplay({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4.75 4.5v4.25H9" />
    </svg>
  );
}

export function IconSoundOn({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 10v4" />
      <path d="M8.5 7.5v9" />
      <path d="M12.5 5v14" />
      <path d="M16.5 8.5v7" />
      <path d="M20.5 10.5v3" />
    </svg>
  );
}

export function IconSoundOff({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M4.5 10v4" />
      <path d="M8.5 7.5v9" />
      <path d="M12.5 5v14" />
      <path d="M16.5 8.5v7" />
      <path d="M20.5 10.5v3" />
      <path d="M4 4l17 17" />
    </svg>
  );
}

export function IconSparkle({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M12 3.5l1.8 5.7 5.7 1.8-5.7 1.8L12 18.5l-1.8-5.7-5.7-1.8 5.7-1.8L12 3.5z" />
      <path
        d="M18.75 15.5l.7 2.05 2.05.7-2.05.7-.7 2.05-.7-2.05-2.05-.7 2.05-.7.7-2.05z"
        opacity="0.7"
      />
    </svg>
  );
}

export function IconLock({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <rect x="5.5" y="10.75" width="13" height="8.75" rx="2.5" />
      <path d="M8.75 10.75V8.5a3.25 3.25 0 0 1 6.5 0v2.25" />
    </svg>
  );
}

export function IconCamera({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <rect x="3.5" y="7" width="17" height="12" rx="3" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M8.5 7l1.2-2h4.6l1.2 2" />
    </svg>
  );
}

export function IconCake({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <path d="M6.5 19.5h11" />
      <path d="M7.5 19.5v-4.2a4.5 4.5 0 0 1 9 0v4.2" />
      <path d="M12 11.5v-2" />
      <path d="M12 6.75c.9 0 1.5.7 1.5 1.5 0 .9-1.5 2.25-1.5 2.25S10.5 9.15 10.5 8.25c0-.8.6-1.5 1.5-1.5z" />
    </svg>
  );
}

export function IconLetter({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...iconProps}
    >
      <rect x="4" y="6.5" width="16" height="11" rx="2.5" />
      <path d="M5 8l7 5 7-5" />
    </svg>
  );
}
