import { useState } from "react";
import { IconLock, IconSparkle } from "./icons.jsx";

export default function SecretCard({ card }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      className="paper-card group relative w-full p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 md:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="page-label">Sealed note</span>

        {open ? (
          <IconSparkle className="h-4 w-4 text-gold transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <IconLock className="h-4 w-4 text-mutedBrown/70 transition-transform duration-500 group-hover:scale-110" />
        )}
      </div>

      <h3 className="display-heading mt-4 text-2xl leading-snug md:text-3xl">
        {card.title}
      </h3>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-hand text-xl text-mutedBrown md:text-2xl">
            {card.note}
          </p>
        </div>
      </div>

      {!open ? (
        <p className="mt-3 text-[10px] uppercase tracking-widest2 text-mutedBrown/60">
          Tap to peek
        </p>
      ) : null}
    </button>
  );
}
