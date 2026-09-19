import { GlowButton } from "../components/ui.jsx";
import { IconArrowRight, IconHeartSolid } from "../components/icons.jsx";
import {
  DoodleArrow,
  DoodleSquiggle,
  DoodleStar,
  DoodleUnderline,
} from "../components/doodles.jsx";

export default function OpeningPage({ page, hasEntered, onEnter, onNext }) {
  return (
    <div className="relative mx-auto w-full max-w-4xl text-center">
      <div className="relative">
        <DoodleStar className="absolute -right-1 top-6 h-6 w-6 text-sage/70 animate-floatSoft md:right-8" />
        <DoodleSquiggle className="absolute -left-1 top-24 h-3 w-14 text-rose/60 md:left-10" />

        <IconHeartSolid className="mx-auto h-12 w-12 text-rose animate-beat md:h-14 md:w-14" />

        <h1 className="display-heading text-glow mt-6 text-5xl leading-[1.06] md:text-7xl">
          {page.title}
        </h1>

        <DoodleUnderline className="mx-auto mt-3 h-3 w-40 text-gold/70 md:w-56" />

        <p className="mt-4 font-hand text-2xl text-mutedBrown md:text-3xl">
          {page.subtitle}
        </p>

        {!hasEntered ? (
          <div className="mt-9 flex justify-center">
            <GlowButton
              onClick={onEnter}
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {page.cta}
            </GlowButton>
          </div>
        ) : (
          <div className="mt-9 flex flex-col items-center gap-2">
            <DoodleArrow className="h-8 w-8 rotate-[16deg] text-mutedBrown/60" />
            <p className="font-hand text-xl text-mutedBrown/80">
              the capsule below takes you forward
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
