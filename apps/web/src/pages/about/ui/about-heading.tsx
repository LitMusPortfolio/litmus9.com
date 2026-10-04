import type { ReactNode } from "react";

import { SectionTitle } from "#/shared/ui";

import { AboutPortrait } from "./about-portrait";

const TITLE = "ABOUT";

const AboutHeading = (): ReactNode => (
  <div className="top-header mobile:static sticky">
    <SectionTitle>{TITLE}</SectionTitle>
    <AboutPortrait />
  </div>
);

export { AboutHeading };
