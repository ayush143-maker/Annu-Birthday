import { useCallback, useEffect, useState } from "react";
import { useAudioDirector } from "./hooks/useAudioDirector";
import { usePageFlow } from "./hooks/usePageFlow";
import ExperienceShell from "./components/ExperienceShell.jsx";
import ConfettiLayer from "./components/ConfettiLayer.jsx";
import OpeningPage from "./pages/OpeningPage.jsx";
import AnnuPage from "./pages/AnnuPage.jsx";
import CakePage from "./pages/CakePage.jsx";
import BalloonsPage from "./pages/BalloonsPage.jsx";
import MemoriesPage from "./pages/MemoriesPage.jsx";
import ReceiptPage from "./pages/ReceiptPage.jsx";
import LetterPage from "./pages/LetterPage.jsx";
import FinalePage from "./pages/FinalePage.jsx";

function PageContent({ page, hasEntered, onEnter, onNext, onConfetti, onReplay }) {
  switch (page.id) {
    case "opening":
      return (
        <OpeningPage
          page={page}
          hasEntered={hasEntered}
          onEnter={onEnter}
          onNext={onNext}
        />
      );
    case "annu":
      return <AnnuPage page={page} />;
    case "cake":
      return <CakePage page={page} onNext={onNext} onConfetti={onConfetti} />;
    case "balloons":
      return <BalloonsPage page={page} onConfetti={onConfetti} />;
    case "memories":
      return <MemoriesPage page={page} />;
    case "receipt":
      return <ReceiptPage page={page} />;
    case "letter":
      return <LetterPage page={page} />;
    case "finale":
      return <FinalePage page={page} onReplay={onReplay} />;
    default:
      return null;
  }
}

export default function App() {
  const audio = useAudioDirector();
  const flow = usePageFlow();

  const [hasEntered, setHasEntered] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(0);

  const { page } = flow;

  const fireConfetti = useCallback(() => {
    setConfettiBurst((value) => value + 1);
  }, []);

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
    setConfettiBurst(0);
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
    <>
      <ConfettiLayer burstId={confettiBurst} />

      <ExperienceShell
        flow={flow}
        hasEntered={hasEntered}
        onNext={handleNext}
        onBack={handlePrev}
        onReplay={handleReplay}
        onConfetti={fireConfetti}
      >
        <PageContent
          page={page}
          hasEntered={hasEntered}
          onEnter={handleEnter}
          onNext={handleNext}
          onConfetti={fireConfetti}
          onReplay={handleReplay}
        />
      </ExperienceShell>
    </>
  );
}
