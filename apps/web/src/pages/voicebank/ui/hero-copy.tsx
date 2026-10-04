import type { ReactNode } from "react";

import { HeroDescription } from "./hero-description";
import { HeroTagline } from "./hero-tagline";

const HeroCopy = (): ReactNode => (
  <div className="ml-tagline-indent max-xl:max-w-tablet-copy max-xl:mt-hero-copy max-xl:text-shadow-play flex flex-col items-start max-xl:ml-0">
    <HeroTagline />
    <HeroDescription />
  </div>
);

export { HeroCopy };
