import type { ReactNode } from "react";

import { PageSection, SectionTitle } from "#/shared/ui";

import { ContactNotices } from "./contact-notices";

const TITLE = "CONTACT";

const ContactPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration="/010_PageSideTitleSvg/CONTACT.svg">
    <SectionTitle>{TITLE}</SectionTitle>
    <ContactNotices />
  </PageSection>
);

export { ContactPage };
