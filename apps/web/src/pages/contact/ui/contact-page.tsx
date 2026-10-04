import type { ReactNode } from "react";

import { PageSection, SectionTitle } from "#/shared/ui";

import { ContactNotices } from "./contact-notices";
import SideTitle from "./side-title.svg?react";

const TITLE = "CONTACT";

const ContactPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration={SideTitle}>
    <SectionTitle>{TITLE}</SectionTitle>
    <ContactNotices />
  </PageSection>
);

export { ContactPage };
