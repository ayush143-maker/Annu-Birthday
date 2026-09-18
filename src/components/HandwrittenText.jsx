export default function HandwrittenText({ children, className = "" }) {
  return (
    <p
      data-letter-line
      className={`font-hand text-xl leading-snug text-cocoa/90 md:text-2xl ${className}`}
    >
      {children}
    </p>
  );
}
