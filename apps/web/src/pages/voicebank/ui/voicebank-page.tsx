import type { ReactNode } from "react";

import { Backdrop } from "#/shared/ui/backdrop";

import { CharacterSection } from "./character-section";
import { DownloadSection } from "./download-section";
import { HeroSection } from "./hero-section";
import { RulesSection } from "./rules-section";

const VoicebankPage = (): ReactNode => (
  <div className="overflow-hidden">
    <HeroSection />
    <div className="relative isolate">
      <Backdrop image="lit" />
      <CharacterSection />
      <DownloadSection />
      <RulesSection />
    </div>
  </div>
);

export { VoicebankPage };
