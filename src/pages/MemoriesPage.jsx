import { siteContent } from "../data/content";
import { PageLabel } from "../components/ui.jsx";
import MemoryCollage from "../components/MemoryCollage.jsx";

export default function MemoriesPage({ page }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-5 md:gap-7">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-3 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>
      </header>

      <MemoryCollage />

      <p className="text-center font-hand text-xl text-mutedBrown md:text-2xl">
        {siteContent.memories.bottomLine}
      </p>
    </div>
  );
}
