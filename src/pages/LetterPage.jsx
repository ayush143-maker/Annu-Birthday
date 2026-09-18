import { PageLabel } from "../components/ui.jsx";
import LetterPaper from "../components/LetterPaper.jsx";

export default function LetterPage({ page }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-5 md:gap-7">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-3 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {page.subtitle}
        </p>
      </header>

      <LetterPaper />
    </div>
  );
}
