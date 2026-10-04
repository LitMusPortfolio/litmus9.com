import type { ReactNode } from "react";

import { FramedImage } from "#/shared/ui";

const PORTRAIT_ALT = "LitMus";

const AboutPortrait = (): ReactNode => (
  <div className="w-portrait mobile:mx-auto relative">
    <div aria-hidden="true" className="bg-accent absolute top-4 -left-4 size-full" />
    <div className="relative">
      <FramedImage src="/002_about/LitMusIcon.webp" alt={PORTRAIT_ALT} width={643} height={643} />
    </div>
  </div>
);

export { AboutPortrait };
