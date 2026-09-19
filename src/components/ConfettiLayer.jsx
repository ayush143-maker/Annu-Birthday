import { useEffect, useMemo, useState } from "react";

const COLORS = ["#C8A66B", "#9CA88B", "#C9D8EA", "#C98A8A", "#55432F", "#E4CE9D"];

export default function ConfettiLayer({ burstId = 0 }) {
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    if (!burstId) {
      return;
    }

    setActiveId(burstId);

    const timer = setTimeout(() => {
      setActiveId(0);
    }, 3200);

    return () => clearTimeout(timer);
  }, [burstId]);

  const pieces = useMemo(() => {
    if (!activeId) {
      return [];
    }

    return Array.from({ length: 28 }, (_, index) => ({
      id: `${activeId}-${index}`,
      left: Math.random() * 100,
      delay: Math.random() * 0.35,
      duration: 1.6 + Math.random() * 1.2,
      drift: (Math.random() - 0.5) * 160,
      spin: Math.round(Math.random() * 720 - 360),
      size: 6 + Math.round(Math.random() * 6),
      color: COLORS[index % COLORS.length],
      round: Math.random() > 0.7,
    }));
  }, [activeId]);

  if (!pieces.length) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.round ? piece.size : piece.size * 0.45,
            backgroundColor: piece.color,
            borderRadius: piece.round ? "9999px" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            "--drift": `${piece.drift}px`,
            "--spin": `${piece.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
