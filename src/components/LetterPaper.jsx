import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import { gsap } from "../utils/gsap";
import HandwrittenText from "./HandwrittenText.jsx";
import TapeStrip from "./TapeStrip.jsx";
import { DoodleHeart, DoodleUnderline } from "./doodles.jsx";

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
      className="paper-card relative mx-auto w-full max-w-3xl rotate-[-0.6deg] px-6 pb-7 pt-8 md:px-10 md:pb-10 md:pt-10"
    >
      <TapeStrip className="-top-3 left-8 rotate-[-8deg]" />
      <TapeStrip className="-top-4 right-10 rotate-[6deg]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 -top-8 h-16 rounded-full bg-gold/10 blur-2xl"
      />

      <p className="font-hand text-2xl text-mutedBrown md:text-3xl">
        {siteContent.letter.toLabel}
      </p>

      <DoodleUnderline className="mt-1 h-2.5 w-24 text-gold/60" />

      <div className="no-scrollbar mt-5 max-h-[44vh] space-y-4 overflow-y-auto pr-2 md:max-h-[52vh]">
        <HandwrittenText className="text-2xl md:text-3xl">
          {siteContent.letter.greeting},
        </HandwrittenText>

        {siteContent.letter.paragraphs.map((paragraph, index) => (
          <HandwrittenText key={index}>{paragraph}</HandwrittenText>
        ))}

        <div className="flex items-center justify-end gap-2 pt-2">
          <HandwrittenText>{siteContent.letter.signoff}</HandwrittenText>
          <DoodleHeart className="h-4 w-4 text-rose" />
        </div>
      </div>
    </article>
  );
}
