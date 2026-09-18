import { siteContent } from "../data/content";
import { IconArrowRight, IconSparkle } from "../components/icons.jsx";
import { GlowButton, PageLabel } from "../components/ui.jsx";

export default function OpeningPage({ page, hasEntered, onEnter, onNext }) {
  return (
    <div className="relative mx-auto w-full max-w-4xl text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 rounded-[60px] bg-gold/10 blur-3xl animate-glowPulse"
      />

      <div className="relative">
        <IconSparkle className="svg-glow mx-auto h-14 w-14 text-gold animate-floatSoft" />

        <PageLabel className="mt-8">{page.label}</PageLabel>

        <h1 className="display-heading text-glow mt-5 text-5xl leading-[1.08] md:text-7xl">
          {page.title}
        </h1>

        <p className="mt-5 font-hand text-2xl text-mutedBrown md:text-3xl">
          {page.subtitle}
        </p>

        <div className="mt-10 flex justify-center">
          <GlowButton
            onClick={hasEntered ? onNext : onEnter}
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {hasEntered ? "Continue the memory book" : page.cta}
          </GlowButton>
        </div>

        <p className="mt-7 text-xs uppercase tracking-widest2 text-mutedBrown/70">
          {siteContent.ui.openingHint}
        </p>
      </div>
    </div>
  );
}
