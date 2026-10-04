import type { ReactNode } from "react";

import { FramedImage } from "#/shared/ui";

const LOGO_ALT = "離途";

const HeroLogo = (): ReactNode => (
  <div className="motion-safe:animate-zoom-in">
    <FramedImage src="/101_Lit/Litlogo.webp" alt={LOGO_ALT} variant="logo" />
  </div>
);

export { HeroLogo };
