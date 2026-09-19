export function PageLabel({ children, className = "" }) {
  return <p className={`page-label ${className}`}>{children}</p>;
}

export function HandwrittenNote({ children, className = "" }) {
  return (
    <p className={`font-hand text-xl text-mutedBrown drop-shadow-sm ${className}`}>
      {children}
    </p>
  );
}

export function GlowButton({ children, onClick, icon, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full border border-gold/40 bg-cocoa px-8 py-4 text-xs font-medium uppercase tracking-widest2 text-ivory shadow-paper transition hover:border-gold/70 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 md:text-sm ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {icon ? (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-softGold/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      />
    </button>
  );
}
