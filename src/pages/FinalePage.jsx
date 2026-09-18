import { siteContent } from "../data/content";
import { Hairline, PageLabel } from "../components/ui.jsx";
import FinalOrnament from "../components/FinalOrnament.jsx";
import ReplayButton from "../components/ReplayButton.jsx";
import { IconLock } from "../components/icons.jsx";

export default function FinalePage({ page, onReplay }) {
  return (
    <div className="relative mx-auto w-full max-w-4xl text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 rounded-[60px] bg-gold/10 blur-3xl animate-glowPulse"
      />

      <div className="relative">
        <FinalOrnament className="mx-auto h-16 w-16 md:h-20 md:w-20" />

        <PageLabel className="mt-8">{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-5 text-5xl leading-[1.05] md:text-7xl">
          {page.title}
        </h2>

        <div className="mt-6 flex items-center justify-center gap-2">
          <p className="font-hand text-2xl text-mutedBrown md:text-3xl">
            {page.subtitle}
          </p>

          <IconLock className="svg-glow h-4 w-4 text-gold" />
        </div>

        <Hairline className="mx-auto mt-8 max-w-[160px]" />

        <p className="mt-6 font-hand text-xl text-mutedBrown md:text-2xl">
          {siteContent.finale.extraLine}
        </p>

        <div className="mt-10 flex justify-center">
          <ReplayButton onClick={onReplay} />
        </div>
      </div>
    </div>
  );
}
