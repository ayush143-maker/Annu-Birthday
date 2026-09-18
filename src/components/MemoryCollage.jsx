import { siteContent } from "../data/content";
import { PhotoFrame } from "./ui.jsx";
import CaptionTag from "./CaptionTag.jsx";

export default function MemoryCollage() {
  const { images, captions } = siteContent.memories;

  const hero = images.find((image) => image.variant === "hero") || images[0];
  const smallOne = images.find((image) => image.id === "together-1") || images[1];
  const smallTwo = images.find((image) => image.id === "together-2") || images[2];
  const smallThree = images.find((image) => image.id === "together-3") || images[3];
  const wide = images.find((image) => image.variant === "wide") || images[images.length - 1];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-12 md:gap-5">
        <figure className="relative col-span-2 sm:col-span-5">
          <PhotoFrame
            image={hero}
            className="h-[24vh] w-full rotate-[-1.8deg] sm:h-[34vh] md:h-[38vh]"
          />

          <CaptionTag className="absolute -bottom-3 left-3 rotate-[-2deg]">
            {captions[0]}
          </CaptionTag>
        </figure>

        <div className="col-span-2 grid grid-cols-2 gap-3 sm:col-span-7 md:gap-5">
          <figure className="relative">
            <PhotoFrame
              image={smallOne}
              className="h-[12vh] w-full rotate-[2deg] sm:h-[16vh] md:h-[17vh]"
            />

            <CaptionTag className="absolute -bottom-3 right-2 rotate-[1deg]">
              {captions[1]}
            </CaptionTag>
          </figure>

          <figure className="relative translate-y-2">
            <PhotoFrame
              image={smallTwo}
              className="h-[12vh] w-full rotate-[-2.2deg] sm:h-[16vh] md:h-[17vh]"
            />
          </figure>

          <figure className="relative hidden sm:block">
            <PhotoFrame
              image={smallThree}
              className="h-[12vh] w-full rotate-[1.4deg] sm:h-[14vh] md:h-[15vh]"
            />

            <CaptionTag className="absolute -bottom-3 left-2 rotate-[-1deg]">
              {captions[2]}
            </CaptionTag>
          </figure>

          <figure className="relative -translate-y-1 hidden sm:block">
            <div className="grid h-[12vh] w-full place-items-center rounded-[24px] border border-dashed border-cocoa/15 bg-cream/45 p-4 text-center shadow-soft sm:h-[14vh] md:h-[15vh]">
              <p className="font-hand text-xl leading-snug text-mutedBrown/85 md:text-2xl">
                more memories than pictures.
              </p>
            </div>
          </figure>
        </div>
      </div>

      <figure className="relative mt-4 md:mt-6">
        <PhotoFrame
          image={wide}
          className="h-[13vh] w-full rotate-[0.4deg] sm:h-[16vh] md:h-[18vh]"
        />

        <CaptionTag className="absolute -bottom-3 right-4 rotate-[1deg]">
          {captions[3]}
        </CaptionTag>
      </figure>
    </div>
  );
}
