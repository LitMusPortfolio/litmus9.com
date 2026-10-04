import type { ReactNode } from "react";

import { Backdrop } from "#/shared/ui";

import { CharacterSection } from "./character-section";
import { DownloadSection } from "./download-section";
import { HeroSection } from "./hero-section";
import { RulesSection } from "./rules-section";

const VoicebankPage = (): ReactNode => (
  <section
    id="voicebank"
    className="relative min-h-screen overflow-hidden bg-cover bg-fixed bg-center p-0"
  >
    <HeroSection />
    <section className="relative min-h-screen bg-cover bg-fixed bg-center py-16">
      <Backdrop image="lit" />
      <CharacterSection />
      <DownloadSection />
      <RulesSection />
    </section>
  </section>
);

export { VoicebankPage };
