import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { BackgroundVideo, FramedImage, SocialLinks } from "#/shared/ui";

import { HomeIntro } from "./home-intro";
import { NewsTicker } from "./news-ticker";

const BANNER_ALT = "VOICEVOX";

const HomePage = (): ReactNode => (
  <section className="fixed top-0 left-0 h-screen min-h-screen w-full overflow-hidden bg-cover bg-fixed bg-center p-0">
    <BackgroundVideo src="/001_top/LitMusHPTopMovie" tone="shade" />
    <HomeIntro />
    <Link
      to="/voicebank"
      className="backdrop-blur-glass motion-safe:animate-breathe breathe-hover absolute top-24 right-12 origin-top-right"
    >
      <FramedImage src="/001_top/離途バナー.webp" alt={BANNER_ALT} />
    </Link>
    <div className="absolute right-12 bottom-32 z-10">
      <SocialLinks size="lg" />
    </div>
    <NewsTicker />
  </section>
);

export { HomePage };
