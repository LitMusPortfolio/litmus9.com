import type { ReactNode } from "react";

import { Lines } from "#/shared/ui";

const TAGLINE = ["優しさと吐息が香る", "穏やかな男声ソフトウェア。"] as const;

const HeroTagline = (): ReactNode => (
  <div className="motion-safe:animate-rise-in motion-safe:animation-delay-600 hero-stacked:col-start-1 hero-stacked:row-start-1 hero-stacked:mb-0 hero-stacked:self-end mb-6">
    <h2 className="bg-primary leading-tagline mobile:whitespace-normal inline box-decoration-clone whitespace-nowrap">
      <Lines lines={TAGLINE} />
    </h2>
  </div>
);

export { HeroTagline };
