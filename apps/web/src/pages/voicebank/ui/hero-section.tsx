import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage, SocialLinks } from "#/shared/ui";

import { FreeDownloadButton } from "./free-download-button";
import { HeroCopy } from "./hero-copy";
import { HeroLogo } from "./hero-logo";

const VISUAL_ALT = "離途 メインビジュアル";

const HeroSection = (): ReactNode => (
  <section
    id="main"
    className="relative flex min-h-screen items-center justify-start overflow-hidden bg-transparent bg-cover bg-fixed bg-center p-0"
  >
    <div className="size-double bg-aurora motion-safe:animate-aurora absolute -top-1/2 -left-1/2 z-0" />
    <BackgroundVideo src="/101_Lit/LitTopMovie" tone="dim" />
    <div className="tablet:items-center tablet:px-8 relative z-2 flex h-screen w-full flex-col items-start justify-center">
      <HeroLogo />
      <HeroCopy />
    </div>
    <div className="h-character motion-safe:animate-fade-in motion-safe:animation-delay-600 pointer-events-none absolute right-0 bottom-0 z-1 w-auto">
      <FramedImage src="/201_Lit立ち絵/LitA.webp" alt={VISUAL_ALT} variant="figure" />
    </div>
    <FreeDownloadButton />
    <div className="absolute top-24 right-12 z-10">
      <SocialLinks size="sm" account="lit" />
    </div>
    <div className="bg-noise absolute inset-0 z-0" />
  </section>
);

export { HeroSection };
