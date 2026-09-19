import { siteContent } from "../data/content";
import { PageLabel } from "../components/ui.jsx";
import { DoodleUnderline } from "../components/doodles.jsx";
import PolaroidCarousel from "../components/PolaroidCarousel.jsx";

const RATIO_STYLES = {
  "16:9": { ratioClass: "aspect-[16/9]", widthClass: "w-[74vw] max-w-[340px]" },
  "4:3": { ratioClass: "aspect-[4/3]", widthClass: "w-[64vw] max-w-[290px]" },
  "3:4": { ratioClass: "aspect-[3/4]", widthClass: "w-[52vw] max-w-[230px]" },
};

const TILTS = [
  "rotate-[-2deg]",
  "rotate-[1.6deg]",
  "rotate-[-1.2deg]",
  "rotate-[2.2deg]",
  "rotate-[-1.8deg]",
];

export default function MemoriesPage({ page }) {
  const { images, captions, bottomLine } = siteContent.memories;

  const frames = images.map((image, index) => {
    const style = RATIO_STYLES[image.ratio] || RATIO_STYLES["3:4"];

    return {
      id: image.id,
      image,
      caption: captions[index] || "",
      ratioClass: style.ratioClass,
      widthClass: style.widthClass,
      tilt: TILTS[index % TILTS.length],
    };
  });

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-3 md:gap-5">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-2 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <DoodleUnderline className="mx-auto mt-2 h-3 w-28 text-gold/70 md:w-40" />
      </header>

      <PolaroidCarousel frames={frames} />

      <p className="px-6 text-center font-hand text-xl text-mutedBrown md:text-2xl">
        {bottomLine}
      </p>

      <p className="text-center text-[10px] uppercase tracking-widest2 text-mutedBrown/60">
        slide sideways · tap to jump
      </p>
    </div>
  );
}
