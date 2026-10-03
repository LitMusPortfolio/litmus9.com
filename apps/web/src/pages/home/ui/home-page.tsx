import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { BackgroundVideo, SocialLinks } from "#/shared/ui";

import { HomeIntro } from "./home-intro";

const NEWS = "××× 2025/06/06 VOICEVOX離途 がリリース！ ×××";
const BANNER_ALT = "VOICEVOX 離途 無料でダウンロード";

const HomePage = (): ReactNode => (
  <section className="fixed inset-0 isolate h-screen overflow-hidden">
    <BackgroundVideo src="/001_top/LitMusHPTopMovie" tone="full" />
    <HomeIntro />
    <Link to="/voicebank" className="absolute top-24 right-12 backdrop-blur-md">
      <img src="/001_top/離途バナー.webp" alt={BANNER_ALT} width="376" height="109" />
    </Link>
    <div className="absolute right-12 bottom-32">
      <SocialLinks size="lg" />
    </div>
    <div className="bg-background/30 absolute inset-x-0 bottom-0 flex overflow-hidden px-12 py-4 backdrop-blur-md">
      <p className="motion-safe:animate-marquee whitespace-nowrap">{NEWS}</p>
    </div>
  </section>
);

export { HomePage };
