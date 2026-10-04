import type { ReactNode } from "react";

import { Lines } from "#/shared/ui";

const TAGLINE = ["優しさと吐息が香る", "穏やかな男声ソフトウェア。"] as const;

const HeroTagline = (): ReactNode => (
  <div className="motion-safe:animate-rise-in motion-safe:animation-delay-600 mb-6 max-xl:col-start-1 max-xl:row-start-1 max-xl:mb-0 max-xl:self-end">
    <h2 className="bg-primary leading-tagline mobile:whitespace-normal inline box-decoration-clone whitespace-nowrap">
      <Lines lines={TAGLINE} />
    </h2>
  </div>
);

export { HeroTagline };
