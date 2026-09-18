import { useEffect, useState } from "react";
import { siteContent } from "../data/content";
import { GlowButton, HandwrittenNote, PageLabel } from "../components/ui.jsx";
import { IconArrowRight, IconSparkle } from "../components/icons.jsx";
import CakeScene from "../components/CakeScene.jsx";
import SparkleLayer from "../components/SparkleLayer.jsx";

export default function CakePage({ page, onNext }) {
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    if (phase !== "lit") {
      return;
    }

    const timer = setTimeout(() => {
      setPhase("wished");
    }, 1200);

    return () => clearTimeout(timer);
  }, [phase]);

  const handleMakeWish = () => {
    if (phase === "idle") {
      setPhase("lit");
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-5 text-center md:gap-7">
      <header>
        <PageLabel>{page.label}</PageLabel>

        <h2 className="display-heading text-glow mt-3 text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.cake.heading}
        </p>
      </header>

      <div className="relative w-full max-w-[380px]">
        <SparkleLayer active={phase !== "idle"} />

        <CakeScene
          lit={phase !== "idle"}
          wished={phase === "wished"}
          onMakeWish={handleMakeWish}
        />
      </div>

      <div className="flex min-h-[96px] flex-col items-center justify-center gap-4">
        {phase === "idle" ? (
          <GlowButton onClick={handleMakeWish} icon={<IconSparkle className="h-4 w-4" />}>
            {siteContent.cake.cta}
          </GlowButton>
        ) : null}

        {phase === "lit" ? (
          <p className="animate-pulse text-xs uppercase tracking-widest2 text-mutedBrown/75">
            Wish in progress
          </p>
        ) : null}

        {phase === "wished" ? (
          <>
            <HandwrittenNote className="text-2xl md:text-3xl">
              {siteContent.cake.wishReceived}
            </HandwrittenNote>

            <GlowButton onClick={onNext} icon={<IconArrowRight className="h-4 w-4" />}>
              Continue
            </GlowButton>
          </>
        ) : null}
      </div>
    </div>
  );
}
