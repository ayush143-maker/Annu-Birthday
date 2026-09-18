import { siteContent } from "../data/content";
import { PageLabel } from "../components/ui.jsx";
import SecretCard from "../components/SecretCard.jsx";
import { IconLock } from "../components/icons.jsx";

export default function SecretBoxPage({ page }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-5 md:gap-7">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-3 text-4xl uppercase tracking-[0.08em] md:text-6xl">
          {siteContent.secretBox.heading}
        </h2>

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.secretBox.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
        {siteContent.secretBox.cards.map((card) => (
          <SecretCard key={card.id} card={card} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <IconLock className="svg-glow h-4 w-4 text-gold" />

        <p className="text-center font-hand text-xl text-mutedBrown md:text-2xl">
          {siteContent.secretBox.finalLine}
        </p>
      </div>
    </div>
  );
}
