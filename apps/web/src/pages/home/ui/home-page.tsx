import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage, SocialLinks } from "#/shared/ui";

import { HomeIntro } from "./home-intro";

const NEWS = "××× 2025/06/06 VOICEVOX離途 がリリース！ ×××";
const BANNER_ALT = "VOICEVOX";

const HomePage = (): ReactNode => (
  <section className="fixed top-0 left-0 h-screen min-h-screen w-full overflow-hidden bg-cover bg-fixed bg-center p-0">
    <BackgroundVideo src="/001_top/LitMusHPTopMovie" tone="full" />
    <HomeIntro />
    <Link to="/voicebank" className="backdrop-blur-glass absolute top-24 right-12">
      <FramedImage src="/001_top/離途バナー.webp" alt={BANNER_ALT} />
    </Link>
    <div className="absolute right-12 bottom-32 z-10">
      <SocialLinks size="lg" />
    </div>
    <div className="bg-veil backdrop-blur-glass absolute right-0 bottom-0 left-0 flex w-full gap-8 overflow-hidden px-12 py-4">
      <span className="motion-safe:animate-marquee">{NEWS}</span>
    </div>
  </section>
);

export { HomePage };
