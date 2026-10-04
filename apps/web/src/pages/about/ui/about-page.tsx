import type { ReactNode } from "react";

import { PageSection } from "#/shared/ui";

import { AboutHeading } from "./about-heading";
import { AboutProfile } from "./about-profile";

const AboutPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration="/010_PageSideTitleSvg/ABOUT.svg" height="content">
    <div className="grid-cols-about mobile:grid-cols-single mobile:gap-8 grid items-start gap-16">
      <AboutHeading />

      <AboutProfile />
    </div>
  </PageSection>
);

export { AboutPage };
