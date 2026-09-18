export default function CaptionTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-cream/75 bg-ivory/90 px-3 py-1 font-hand text-lg text-mutedBrown shadow-soft backdrop-blur-[1px] ${className}`}
    >
      {children}
    </span>
  );
}
