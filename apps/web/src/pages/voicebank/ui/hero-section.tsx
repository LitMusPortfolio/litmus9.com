import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage } from "#/shared/ui";

import { FreeDownloadButton } from "./free-download-button";
import { HeroCopy } from "./hero-copy";

const LOGO_ALT = "離途";
const VISUAL_ALT = "離途 メインビジュアル";

const HeroSection = (): ReactNode => (
  <section
    id="main"
    className="max-xl:after:to-background relative flex min-h-screen items-center justify-start overflow-hidden bg-transparent bg-cover bg-fixed bg-center p-0 max-xl:grid max-xl:grid-cols-1 max-xl:items-start max-xl:overflow-clip max-xl:pb-32 max-xl:after:absolute max-xl:after:inset-x-0 max-xl:after:bottom-0 max-xl:after:z-1 max-xl:after:h-32 max-xl:after:bg-linear-to-b max-xl:after:from-transparent"
  >
    <div className="size-double bg-aurora motion-safe:animate-aurora absolute -top-1/2 -left-1/2 z-0" />
    <BackgroundVideo src="/101_Lit/LitTopMovie" tone="dim" />
    <div className="mobile:px-4 max-xl:grid-rows-hero relative z-2 flex h-screen w-full flex-col items-start justify-center max-xl:col-start-1 max-xl:row-start-1 max-xl:grid max-xl:h-auto max-xl:justify-start max-xl:justify-items-start max-xl:px-8 max-xl:pt-20">
      <FramedImage src="/101_Lit/Litlogo.webp" alt={LOGO_ALT} variant="logo" />
      <HeroCopy />
    </div>
    <div className="h-character max-xl:ml-hero-figure-x max-xl:w-hero-figure max-xl:h-hero-figure-h max-xl:hero-figure-fade pointer-events-none absolute right-0 bottom-0 z-1 w-auto max-xl:sticky max-xl:top-16 max-xl:right-auto max-xl:bottom-auto max-xl:col-start-1 max-xl:row-span-2 max-xl:row-start-1 max-xl:mt-16 max-xl:mask-b-from-70%">
      <FramedImage src="/201_Lit立ち絵/LitA.webp" alt={VISUAL_ALT} variant="figure" />
    </div>
    <FreeDownloadButton />
    <div className="bg-noise absolute inset-0 z-0" />
  </section>
);

export { HeroSection };
