import type { ReactNode } from "react";

import { BackgroundVideo } from "#/shared/ui/background-video";

import { HeroCopy } from "./hero-copy";

const LOGO_ALT = "離途";
const VISUAL_ALT = "離途 メインビジュアル";
const DOWNLOAD_LABEL = "FREE DL";

const HeroSection = (): ReactNode => (
  <section className="relative isolate flex min-h-screen items-center overflow-hidden">
    <BackgroundVideo src="/101_Lit/LitTopMovie" tone="dim" />
    <div aria-hidden="true" className="animate-aurora bg-aurora absolute -inset-1/2 -z-20" />
    <div className="relative z-20 flex h-screen w-full flex-col items-start justify-center">
      <img src="/101_Lit/Litlogo.webp" alt={LOGO_ALT} className="max-h-hero-logo mb-8 w-auto" />
      <HeroCopy />
    </div>
    <div className="pointer-events-none absolute right-0 bottom-0 z-10 h-19/20">
      <img
        src="/201_Lit立ち絵/LitA.webp"
        alt={VISUAL_ALT}
        className="drop-shadow-glow h-full w-auto object-contain"
      />
    </div>
    <a
      href="#downloads"
      className="animate-float from-primary-deep to-accent shadow-button absolute right-16 bottom-16 z-30 rounded-full bg-linear-135 px-8 py-32 text-5xl font-bold tracking-widest uppercase transition hover:scale-105 hover:animate-none"
    >
      {DOWNLOAD_LABEL}
    </a>
  </section>
);

export { HeroSection };
