import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import { gsap } from "../utils/gsap";
import HandwrittenText from "./HandwrittenText.jsx";
import TapeStrip from "./TapeStrip.jsx";
import { IconLock } from "./icons.jsx";
import { PageLabel } from "./ui.jsx";

export default function LetterPaper() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-letter-line]",
        {
          autoAlpha: 0,
          y: 14,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: reducedMotion ? 0.01 : 0.55,
          stagger: reducedMotion ? 0 : 0.08,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={ref}
      className="paper-card relative mx-auto w-full max-w-3xl rotate-[-0.6deg] px-6 pb-8 pt-10 md:px-10 md:pb-12 md:pt-12"
    >
      <TapeStrip className="-top-3 left-8 rotate-[-8deg]" />
      <TapeStrip className="-top-4 right-10 rotate-[6deg]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 -top-8 h-16 rounded-full bg-gold/10 blur-2xl"
      />

      <header className="flex items-end justify-between gap-4 border-b border-cocoa/10 pb-4">
        <div>
          <PageLabel>From</PageLabel>
          <p className="mt-1 font-hand text-2xl text-mutedBrown">
            {siteContent.brand.sender}
          </p>
        </div>

        <div className="text-right">
          <PageLabel>To</PageLabel>
          <p className="mt-1 font-hand text-2xl text-mutedBrown">
            {siteContent.brand.recipient}
          </p>
        </div>
      </header>

      <div className="mt-6 max-h-[46vh] space-y-4 overflow-y-auto pr-2 [scrollbar-width:none] md:max-h-[52vh] [&::-webkit-scrollbar]:hidden">
        <HandwrittenText className="text-2xl md:text-3xl">
          {siteContent.letter.greeting},
        </HandwrittenText>

        {siteContent.letter.paragraphs.map((paragraph, index) => (
          <HandwrittenText key={index}>{paragraph}</HandwrittenText>
        ))}

        <div className="flex items-center justify-end gap-2 pt-2">
          <HandwrittenText>{siteContent.letter.signoff}</HandwrittenText>
          <IconLock className="svg-glow h-4 w-4 text-gold" />
        </div>
      </div>
    </article>
  );
}
