import { siteContent } from "../data/content";
import { IconReplay } from "./icons.jsx";

export default function ReplayButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center gap-3 rounded-full border border-cocoa/20 bg-cream/80 px-8 py-4 text-xs uppercase tracking-widest2 text-cocoa shadow-soft transition hover:border-gold/55 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70"
    >
      <IconReplay className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180" />
      {siteContent.finale.replayCta}
    </button>
  );
}
