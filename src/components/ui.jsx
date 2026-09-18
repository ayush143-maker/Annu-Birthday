import { useEffect, useState } from "react";
import { siteContent } from "../data/content";
import {
  IconArrowRight,
  IconCake,
  IconCamera,
  IconLetter,
  IconLock,
  IconReplay,
  IconSparkle,
} from "./icons.jsx";

export function PageLabel({ children, className = "" }) {
  return <p className={`page-label ${className}`}>{children}</p>;
}

export function Hairline({ className = "" }) {
  return <div className={`hairline ${className}`} />;
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

export function ControlButton({ label, onClick, disabled = false, active = false, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`grid h-11 w-11 place-items-center rounded-full border bg-cream/75 text-cocoa/80 shadow-soft transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 ${
        disabled
          ? "cursor-not-allowed opacity-35"
          : "hover:border-gold/55 hover:text-cocoa"
      } ${active ? "border-gold/60 shadow-glow" : "border-cocoa/15"}`}
    >
      {children}
    </button>
  );
}

export function PhotoFrame({ image, className = "" }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [image?.src]);

  if (!image) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-cream/80 bg-cream/70 shadow-paper ${className}`}
    >
      {failed || !image.src ? (
        <div className="grid h-full w-full place-items-center bg-beige/35 p-4 text-center">
          <div>
            <IconCamera className="mx-auto h-6 w-6 text-mutedBrown/60" />
            <p className="mt-3 text-[10px] uppercase tracking-widest2 text-mutedBrown/60">
              Awaiting photograph
            </p>
          </div>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-cocoa/5"
      />
    </div>
  );
}

export function SectionPlaceholder({ page, onReplay }) {
  const isFinale = page.id === "finale";

  let icon = <IconSparkle className="svg-glow mx-auto h-10 w-10 text-gold" />;

  if (page.id === "secret-box") {
    icon = <IconLock className="svg-glow mx-auto h-10 w-10 text-gold" />;
  }

  if (page.id === "memories") {
    icon = <IconCamera className="svg-glow mx-auto h-10 w-10 text-gold" />;
  }

  if (page.id === "cake") {
    icon = <IconCake className="svg-glow mx-auto h-10 w-10 text-gold" />;
  }

  if (page.id === "letter") {
    icon = <IconLetter className="svg-glow mx-auto h-10 w-10 text-gold" />;
  }

  return (
    <div className="paper-card relative mx-auto w-full max-w-3xl px-7 pb-10 pt-12 text-center md:px-12 md:pb-14 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 -top-8 h-16 rounded-full bg-gold/10 blur-2xl"
      />

      {icon}

      <PageLabel className="mt-6">{page.label}</PageLabel>

      <h2 className="display-heading text-glow mt-4 text-4xl leading-tight md:text-6xl">
        {page.title}
      </h2>

      <p className="mt-4 font-hand text-2xl text-mutedBrown md:text-3xl">
        {page.subtitle}
      </p>

      {isFinale ? (
        <p className="mt-4 font-hand text-xl text-mutedBrown md:text-2xl">
          {siteContent.finale.extraLine}
        </p>
      ) : null}

      <Hairline className="mx-auto mt-7 max-w-[120px]" />

      {isFinale ? (
        <div className="mt-8 flex justify-center">
          <GlowButton onClick={onReplay} icon={<IconReplay className="h-4 w-4" />}>
            {siteContent.finale.replayCta}
          </GlowButton>
        </div>
      ) : (
        <p className="mt-6 text-xs uppercase tracking-widest2 text-mutedBrown/70">
          Visual section coming next
        </p>
      )}
    </div>
  );
}
