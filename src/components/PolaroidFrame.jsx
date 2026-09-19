import { useEffect, useState } from "react";
import { IconCamera } from "./icons.jsx";
import TapeStrip from "./TapeStrip.jsx";

export default function PolaroidFrame({
  image,
  caption,
  ratioClass = "aspect-[3/4]",
  taped = true,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [image?.src]);

  if (!image) {
    return null;
  }

  return (
    <figure
      className={`relative border border-cream/80 bg-cream/95 p-2.5 pb-3 shadow-paper ${className}`}
    >
      {taped ? (
        <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      ) : null}

      <div className={`overflow-hidden rounded-[10px] bg-beige/40 ${ratioClass}`}>
        {failed || !image.src ? (
          <div className="grid h-full w-full place-items-center">
            <IconCamera className="h-6 w-6 text-mutedBrown/60" />
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {caption ? (
        <figcaption className="mt-2 text-center font-hand text-lg leading-snug text-mutedBrown">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
