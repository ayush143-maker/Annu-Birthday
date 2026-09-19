import { useState } from "react";
import { siteContent } from "../data/content";
import { IconLock } from "../components/icons.jsx";
import { DoodleStar, DoodleUnderline } from "../components/doodles.jsx";
import PolaroidFrame from "../components/PolaroidFrame.jsx";

export default function FinalePage({ page, onReplay }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="relative mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-3 text-center md:gap-5">
      <DoodleStar className="absolute left-[8%] top-[12%] h-5 w-5 text-sage/60 animate-floatSoft" />
      <DoodleStar className="absolute bottom-[16%] right-[10%] h-6 w-6 text-gold/60 animate-floatSoft" />

      <h2 className="display-heading text-glow text-4xl leading-[1.05] md:text-6xl">
        {page.title}
      </h2>

      <div className="flex items-center justify-center gap-2">
        <p className="font-hand text-xl text-mutedBrown md:text-2xl">
          {page.subtitle}
        </p>
        <IconLock className="h-4 w-4 text-gold" />
      </div>

      <PolaroidFrame
        image={siteContent.finale.photo}
        ratioClass="aspect-[3/4]"
        className="mt-1 w-[36vw] max-w-[180px] rotate-[2.5deg] md:w-[220px] md:max-w-[220px]"
      />

      <p className="font-hand text-xl text-mutedBrown md:text-2xl">
        {siteContent.finale.extraLine}
      </p>

      <DoodleUnderline className="h-2.5 w-28 text-gold/60" />

      <p className="font-hand text-lg text-mutedBrown/75 md:text-xl">
        {siteContent.finale.ps}
      </p>

      <div className="mt-3 flex flex-col items-center gap-1 md:mt-5">
        {!logoFailed ? (
          <img
            src="/images/pixel-studio.png"
            alt="Pixel Studio"
            onError={() => setLogoFailed(true)}
            className="h-9 w-9 object-contain opacity-80 mix-blend-multiply md:h-10 md:w-10"
          />
        ) : null}

        <p className="font-hand text-base leading-tight text-mutedBrown/80 md:text-lg">
          Made with love, by
        </p>

        <p className="font-hand text-lg leading-tight text-cocoa md:text-xl">
          Pixel Studio!
        </p>
      </div>
    </div>
  );
}
