export default function TapeStrip({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block h-6 w-24 rounded-[4px] bg-beige/75 shadow-soft backdrop-blur-[1px] ${className}`}
    />
  );
}
