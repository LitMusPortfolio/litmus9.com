import type { ReactNode } from "react";

import { FramedImage } from "#/shared/ui";

const PORTRAIT_ALT = "LitMus";

const AboutPortrait = (): ReactNode => (
  <div className="mobile:flex mobile:justify-center">
    <FramedImage src="/002_about/LitMusIcon.webp" alt={PORTRAIT_ALT} variant="portrait" />
  </div>
);

export { AboutPortrait };
