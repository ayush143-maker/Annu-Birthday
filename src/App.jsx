import { useCallback, useEffect, useState } from "react";
import { useAudioDirector } from "./hooks/useAudioDirector";
import { usePageFlow } from "./hooks/usePageFlow";
import ExperienceShell from "./components/ExperienceShell.jsx";
import OpeningPage from "./pages/OpeningPage.jsx";
import AnnuPage from "./pages/AnnuPage.jsx";
import { SectionPlaceholder } from "./components/ui.jsx";

function PageContent({ page, hasEntered, onEnter, onNext, onReplay }) {
  if (page.id === "opening") {
    return (
      <OpeningPage
        page={page}
        hasEntered={hasEntered}
        onEnter={onEnter}
        onNext={onNext}
      />
    );
  }

  if (page.id === "annu") {
    return <AnnuPage page={page} />;
  }

  return <SectionPlaceholder page={page} onReplay={onReplay} />;
}

export default function App() {
  const audio = useAudioDirector();
  const flow = usePageFlow();

  const [hasEntered, setHasEntered] = useState(false);

  const { page } = flow;

  const handleEnter = useCallback(() => {
    setHasEntered(true);

    if (page.musicTrack) {
      audio.playTrack(page.musicTrack);
    }
  }, [audio, page.musicTrack]);

  const handleNext = useCallback(() => {
    if (!hasEntered || !flow.hasNext) {
      return;
    }

    flow.next();
  }, [flow, hasEntered]);

  const handlePrev = useCallback(() => {
    if (!hasEntered || !flow.hasPrev) {
      return;
    }

    flow.prev();
  }, [flow, hasEntered]);

  const handleReplay = useCallback(() => {
    audio.stopAll();
    setHasEntered(false);
    flow.replay();
  }, [audio, flow]);

  useEffect(() => {
    if (!hasEntered) {
      return;
    }

    if (page.musicTrack) {
      audio.playTrack(page.musicTrack);
    }
  }, [audio, hasEntered, page.id, page.musicTrack]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!hasEntered) {
        return;
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleNext, handlePrev, hasEntered]);

  return (
    <ExperienceShell
      flow={flow}
      audio={audio}
      hasEntered={hasEntered}
      onNext={handleNext}
      onPrev={handlePrev}
    >
      <PageContent
        page={page}
        hasEntered={hasEntered}
        onEnter={handleEnter}
        onNext={handleNext}
        onReplay={handleReplay}
      />
    </ExperienceShell>
  );
}
