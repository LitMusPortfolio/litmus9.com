import type { ReactNode } from "react";

import { PageSection, SectionTitle } from "#/shared/ui";

import { AboutProfile } from "./about-profile";

const TITLE = "ABOUT";
const PORTRAIT_ALT = "LitMus";

const AboutPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration="/010_PageSideTitleSvg/ABOUT.svg">
    <SectionTitle>{TITLE}</SectionTitle>
    <div className="grid grid-cols-13 items-center gap-16">
      <img
        src="/002_about/LitMusIcon.webp"
        alt={PORTRAIT_ALT}
        width="643"
        height="643"
        className="col-span-6 block w-4/5"
      />
      <AboutProfile />
    </div>
  </PageSection>
);

export { AboutPage };
