import type { ReactNode } from "react";

import { HeroDescription } from "./hero-description";
import { HeroTagline } from "./hero-tagline";

const HeroCopy = (): ReactNode => (
  <div className="ml-tagline-indent tablet:ml-0 tablet:max-w-tablet-copy tablet:items-center flex flex-col items-start">
    <HeroTagline />
    <HeroDescription />
  </div>
);

export { HeroCopy };
