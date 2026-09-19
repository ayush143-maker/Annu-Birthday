import { siteContent } from "../data/content";
import { PageLabel } from "../components/ui.jsx";
import { DoodleUnderline } from "../components/doodles.jsx";
import StackedCardCarousel from "../components/StackedCardCarousel.jsx";

export default function AnnuPage({ page }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-4 md:gap-6">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-2 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <DoodleUnderline className="mx-auto mt-2 h-3 w-28 text-gold/70 md:w-40" />

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.annu.heading}
        </p>
      </header>

      <StackedCardCarousel images={siteContent.annu.images} />
    </div>
  );
}
