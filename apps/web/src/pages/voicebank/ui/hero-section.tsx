import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage } from "#/shared/ui";

import { FreeDownloadButton } from "./free-download-button";
import { HeroCopy } from "./hero-copy";

const LOGO_ALT = "離途";
const VISUAL_ALT = "離途 メインビジュアル";

const HeroSection = (): ReactNode => (
  <section
    id="main"
    className="relative flex min-h-screen items-center justify-start overflow-hidden bg-transparent bg-cover bg-fixed bg-center p-0 max-xl:flex-col max-xl:pb-12"
  >
    <div className="size-double bg-aurora motion-safe:animate-aurora absolute -top-1/2 -left-1/2 z-0" />
    <BackgroundVideo src="/101_Lit/LitTopMovie" tone="dim" />
    <div className="mobile:px-4 relative z-2 flex h-screen w-full flex-col items-start justify-center max-xl:-mt-24 max-xl:h-auto max-xl:items-center max-xl:px-8">
      <FramedImage src="/101_Lit/Litlogo.webp" alt={LOGO_ALT} variant="logo" />
      <HeroCopy />
    </div>
    <div className="h-character pointer-events-none absolute right-0 bottom-0 z-1 w-auto max-xl:static max-xl:order-first max-xl:h-auto max-xl:w-full max-xl:max-w-xl max-xl:mask-b-from-50% max-xl:pt-14">
      <FramedImage src="/201_Lit立ち絵/LitA.webp" alt={VISUAL_ALT} variant="figure" />
    </div>
    <FreeDownloadButton />
    <div className="bg-noise absolute inset-0 z-0" />
  </section>
);

export { HeroSection };
