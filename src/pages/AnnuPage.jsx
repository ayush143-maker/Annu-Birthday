import { siteContent } from "../data/content";
import { HandwrittenNote, PageLabel, PhotoFrame } from "../components/ui.jsx";

export default function AnnuPage({ page }) {
  const images = siteContent.annu.images;
  const hero = images.find((image) => image.variant === "hero") || images[0];
  const smalls = images.filter((image) => image.id !== hero.id).slice(0, 4);

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-5 md:gap-8">
      <header className="text-center">
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-3 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.annu.heading}
        </p>
      </header>

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 md:gap-6">
          <figure className="relative mx-auto w-full max-w-[260px] sm:col-span-5 sm:max-w-none">
            <PhotoFrame
              image={hero}
              className="h-[34vh] w-full rotate-[-1.5deg] sm:h-[48vh] md:h-[52vh]"
            />

            <HandwrittenNote className="absolute -bottom-5 left-4 rotate-[-4deg]">
              her.
            </HandwrittenNote>
          </figure>

          <div className="grid grid-cols-2 gap-4 sm:col-span-7 md:gap-6">
            {smalls.map((image, index) => (
              <figure
                key={image.id}
                className={`relative ${index > 1 ? "hidden sm:block" : ""} ${
                  index % 2 ? "translate-y-2" : "-translate-y-1"
                }`}
              >
                <PhotoFrame
                  image={image}
                  className={`h-[14vh] w-full sm:h-[22vh] md:h-[24vh] ${
                    index % 2 ? "rotate-[1.8deg]" : "rotate-[-1.8deg]"
                  }`}
                />

                {index === 1 ? (
                  <HandwrittenNote className="absolute -bottom-5 right-3 rotate-[3deg]">
                    that smile.
                  </HandwrittenNote>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
