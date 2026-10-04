import type { ReactNode } from "react";

import { Container, SectionTitle } from "#/shared/ui";

import { RulesList } from "./rules-list";

const TITLE = "RULES";

const RulesSection = (): ReactNode => (
  <section id="rules" className="relative min-h-screen bg-cover bg-fixed bg-center py-16">
    <Container>
      <SectionTitle tone="title">{TITLE}</SectionTitle>
      <RulesList />
    </Container>
  </section>
);

export { RulesSection };
