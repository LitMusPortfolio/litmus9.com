import type { ReactNode } from "react";

import { PageSection } from "#/shared/ui/page-section";
import { SectionTitle } from "#/shared/ui/section-title";

import { ContactNotices } from "./contact-notices";

const TITLE = "CONTACT";

const ContactPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration="/010_PageSideTitleSvg/CONTACT.svg">
    <SectionTitle>{TITLE}</SectionTitle>
    <ContactNotices />
  </PageSection>
);

export { ContactPage };
