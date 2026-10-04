import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage } from "#/shared/ui";

import { FreeDownloadButton } from "./free-download-button";
import { HeroCopy } from "./hero-copy";

const LOGO_ALT = "離途";
const VISUAL_ALT = "離途 メインビジュアル";

const HeroSection = (): ReactNode => (
  <section
    id="main"
    className="relative flex min-h-screen items-center justify-start overflow-hidden bg-transparent bg-cover bg-fixed bg-center p-0"
  >
    <div className="size-double bg-aurora motion-safe:animate-aurora absolute -top-1/2 -left-1/2 z-0" />
    <BackgroundVideo src="/101_Lit/LitTopMovie" tone="dim" />
    <div className="tablet:items-center tablet:px-8 mobile:px-4 mobile:pb-24 relative z-2 flex h-screen w-full flex-col items-start justify-center">
      <FramedImage src="/101_Lit/Litlogo.webp" alt={LOGO_ALT} variant="logo" />
      <HeroCopy />
    </div>
    <div className="h-character mobile:opacity-40 pointer-events-none absolute right-0 bottom-0 z-1 w-auto">
      <FramedImage src="/201_Lit立ち絵/LitA.webp" alt={VISUAL_ALT} variant="figure" />
    </div>
    <FreeDownloadButton />
    <div className="bg-noise absolute inset-0 z-0" />
  </section>
);

export { HeroSection };
