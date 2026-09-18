import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing");
}

createRoot(container).render(
  <React.StrictMode>
    <main className="shell-screen items-center justify-center px-6 text-center">
      <div className="relative w-full max-w-3xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-16 rounded-[48px] bg-gold/12 blur-3xl animate-glowPulse"
        />

        <div className="relative">
          <svg
            className="svg-glow mx-auto h-14 w-14 text-gold animate-floatSoft"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M32 7.5l3.3 11.1 11.1 3.3-11.1 3.3L32 36.3l-3.3-11.1L17.6 21.9l11.1-3.3L32 7.5z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M46.8 38.4l1.2 3.9 3.9 1.2-3.9 1.2-1.2 3.9-1.2-3.9-3.9-1.2 3.9-1.2 1.2-3.9z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
              opacity="0.75"
            />
            <path
              d="M17.4 38.4l1 3.2 3.2 1-3.2 1-1 3.2-1-3.2-3.2-1 3.2-1 1-3.2z"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinejoin="round"
              opacity="0.55"
            />
          </svg>

          <p className="mt-8 page-label">
            Secret Box — Private Birthday Edition
          </p>

          <h1 className="display-heading text-glow mt-5 text-5xl leading-[1.08] md:text-7xl">
            Happy Birthday, Annu
          </h1>

          <p className="mt-5 font-hand text-2xl text-mutedBrown md:text-3xl">
            A quiet little memory book, made only for you.
          </p>

          <div className="hairline mx-auto mt-9 max-w-xs" />

          <p className="mt-7 text-xs uppercase tracking-widest2 text-mutedBrown/80">
            Batch 1 scaffold ready — Vercel compatible
          </p>
        </div>
      </div>
    </main>
  </React.StrictMode>
);
