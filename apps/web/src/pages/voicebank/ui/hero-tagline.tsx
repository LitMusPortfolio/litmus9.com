import type { ReactNode } from "react";

import { Lines } from "#/shared/ui";

const TAGLINE = ["優しさと吐息が香る", "穏やかな男声ソフトウェア。"] as const;

const HeroTagline = (): ReactNode => (
  <div className="mb-6">
    <h2 className="bg-primary leading-tagline mobile:whitespace-normal inline box-decoration-clone whitespace-nowrap">
      <Lines lines={TAGLINE} />
    </h2>
  </div>
);

export { HeroTagline };
