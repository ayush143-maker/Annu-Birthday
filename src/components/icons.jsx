const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M4.5 12h14.5" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}

export function IconArrowLeft({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M19.5 12H5" />
      <path d="M10.5 6.5 5 12l5.5 5.5" />
    </svg>
  );
}

export function IconReplay({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4.75 4.5v4.25H9" />
    </svg>
  );
}

export function IconHeartSolid({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12 20.4C7.2 16.9 3.6 13.8 3.6 10.2 3.6 7.6 5.6 5.6 8.1 5.6c1.5 0 3 .7 3.9 1.9.9-1.2 2.4-1.9 3.9-1.9 2.5 0 4.5 2 4.5 4.6 0 3.6-3.6 6.7-8.4 10.2z" />
    </svg>
  );
}

export function IconConfetti({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M9.5 14.5 5 19l6.5 1.5-2-6z" />
      <path d="M12 12l3.2-3.2" />
      <path d="M14.5 14.5l4.2-1.1" />
      <path d="M11 9.5l1.1-4.2" />
      <circle cx="18.4" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="19.6" cy="11.4" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLock({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <rect x="5.5" y="10.75" width="13" height="8.75" rx="2.5" />
      <path d="M8.75 10.75V8.5a3.25 3.25 0 0 1 6.5 0v2.25" />
    </svg>
  );
}

export function IconStar({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12 3.6l2 5.1 5.4.4-4.1 3.5 1.3 5.3-4.6-2.9-4.6 2.9 1.3-5.3-4.1-3.5 5.4-.4z" />
    </svg>
  );
}

export function IconCup({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M5.5 9h11v6a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V9z" />
      <path d="M16.5 10h1.4a2.5 2.5 0 0 1 0 5h-1.4" />
    </svg>
  );
}

export function IconNote({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M9 18V6l8-2v12" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="15" cy="16" r="2.2" />
    </svg>
  );
}

export function IconBell({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M4.5 17h15" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M12 11V9.6" />
      <circle cx="12" cy="8.8" r="0.8" />
    </svg>
  );
}

export function IconPhone({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <path d="M6.8 3.8l2.4 2.4-1.8 1.8c.9 2 2.6 3.7 4.6 4.6l1.8-1.8 2.4 2.4-2.2 2.2c-.6.6-1.5.8-2.3.5-4-1.4-7.2-4.6-8.6-8.6-.3-.8-.1-1.7.5-2.3z" />
    </svg>
  );
}

export function IconCamera({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...iconProps}>
      <rect x="3.5" y="7" width="17" height="12" rx="3" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M8.5 7l1.2-2h4.6l1.2 2" />
    </svg>
  );
}
