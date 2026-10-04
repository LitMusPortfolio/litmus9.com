import type { ReactNode } from "react";

const LOGO_ALT = "離途";

const HeroLogo = (): ReactNode => (
  <div className="motion-safe:animate-zoom-in hero-stacked:col-start-1 hero-stacked:row-start-1 hero-stacked:self-start w-full">
    <div className="mobile:w-3/4 relative mb-8 w-1/2 max-xl:col-start-1 max-xl:row-start-1 max-xl:self-start">
      <img
        src="/101_Lit/Litlogo.webp"
        alt={LOGO_ALT}
        loading="lazy"
        className="max-h-hero-logo h-auto w-auto max-w-full"
      />
    </div>
  </div>
);

export { HeroLogo };
