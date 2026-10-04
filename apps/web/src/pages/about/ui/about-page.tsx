import type { ReactNode } from "react";

import { PageSection, SectionTitle } from "#/shared/ui";

import { AboutPortrait } from "./about-portrait";
import { AboutProfile } from "./about-profile";

const TITLE = "ABOUT";

const AboutPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration="/010_PageSideTitleSvg/ABOUT.svg" height="content">
    <SectionTitle>{TITLE}</SectionTitle>
    <div className="grid-cols-about mobile:grid-cols-single mobile:gap-8 grid items-center gap-16">
      <AboutPortrait />
      <AboutProfile />
    </div>
  </PageSection>
);

export { AboutPage };
