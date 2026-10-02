import type { ReactNode } from "react";

import { Container } from "#/shared/ui/container";
import { SectionTitle } from "#/shared/ui/section-title";

import { RulesList } from "./rules-list";

const TITLE = "RULES";

const RulesSection = (): ReactNode => (
  <section id="rules" className="min-h-screen py-16">
    <Container>
      <SectionTitle tone="title">{TITLE}</SectionTitle>
      <RulesList />
    </Container>
  </section>
);

export { RulesSection };
