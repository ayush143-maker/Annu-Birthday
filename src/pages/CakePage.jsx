import { useState } from "react";
import { siteContent } from "../data/content";
import { GlowButton, HandwrittenNote } from "../components/ui.jsx";
import { DoodleUnderline } from "../components/doodles.jsx";
import CakeScene from "../components/CakeScene.jsx";

export default function CakePage({ page, onNext, onConfetti }) {
  const [phase, setPhase] = useState("idle");

  const lightCandles = () => {
    if (phase === "idle") {
      setPhase("lit");
    }
  };

  const makeWish = () => {
    if (phase !== "lit") {
      return;
    }

    setPhase("blew");

    if (onConfetti) {
      onConfetti();
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-3 text-center md:gap-5">
      <header>
        <h2 className="display-heading text-glow text-4xl leading-tight md:text-6xl">
          {page.title}
        </h2>

        <DoodleUnderline className="mx-auto mt-2 h-3 w-24 text-gold/70 md:w-32" />

        <p className="mt-3 font-hand text-2xl text-mutedBrown md:text-3xl">
          {siteContent.cake.heading}
        </p>
      </header>

      <CakeScene
        lit={phase !== "idle"}
        blew={phase === "blew"}
        onTap={lightCandles}
      />

      <div className="flex min-h-[92px] flex-col items-center justify-center gap-2">
        {phase === "idle" ? (
          <p className="animate-pulse text-xs uppercase tracking-widest2 text-mutedBrown/75">
            {siteContent.cake.lightCta}
          </p>
        ) : null}

        {phase === "lit" ? (
          <GlowButton onClick={makeWish}>{siteContent.cake.wishCta}</GlowButton>
        ) : null}

        {phase === "blew" ? (
          <>
            <HandwrittenNote className="text-2xl md:text-3xl">
              {siteContent.cake.wishReceived}
            </HandwrittenNote>

            <p className="font-hand text-lg text-mutedBrown/80">
              {siteContent.cake.blowNote}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
