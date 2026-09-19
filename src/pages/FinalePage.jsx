import { useEffect, useState } from "react";
import { siteContent } from "../data/content";
import { IconLock } from "../components/icons.jsx";
import { DoodleStar, DoodleUnderline } from "../components/doodles.jsx";
import PolaroidFrame from "../components/PolaroidFrame.jsx";

export default function FinalePage({ page, onReplay }) {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.src = "/images/pixel-studio.png";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          let alpha = 1;
          if (lum >= 235) {
            alpha = 0;
          } else if (lum > 205) {
            alpha = (235 - lum) / 30;
          }

          data[i + 3] = Math.round(data[i + 3] * alpha);
        }

        ctx.putImageData(imageData, 0, 0);

        if (!cancelled) {
          setLogoSrc(canvas.toDataURL("image/png"));
        }
      } catch {
        if (!cancelled) {
          setLogoSrc("/images/pixel-studio.png");
        }
      }
    };

    img.onerror = () => {
      if (!cancelled) {
        setLogoSrc(null);
      }
    };

    return () => {
      cancelled = true;
    };
  }, []);

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
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="Pixel Studio"
            className="h-9 w-9 object-contain opacity-90 md:h-10 md:w-10"
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
