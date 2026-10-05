import { useAtomMount } from "@effect/atom-react";
import type { ReactNode } from "react";

import { sectionSnapAtom } from "#/pages/voicebank/model/section-snap";
import { Backdrop } from "#/shared/ui";

import { CharacterSection } from "./character-section";
import { DownloadSection } from "./download-section";
import { HeroSection } from "./hero-section";
import { RulesSection } from "./rules-section";

const VoicebankPage = (): ReactNode => {
  useAtomMount(sectionSnapAtom);
  return (
    <section
      id="voicebank"
      className="relative min-h-screen overflow-clip bg-cover bg-fixed bg-center p-0 pointer-coarse:[:root:has(&)]:snap-y pointer-coarse:[:root:has(&)]:snap-mandatory pointer-coarse:[:root:has(&)_footer]:snap-end"
    >
      <HeroSection />
      <section className="max-xl:before:from-background relative min-h-screen bg-cover bg-fixed bg-center py-16 max-xl:before:absolute max-xl:before:inset-x-0 max-xl:before:top-0 max-xl:before:h-32 max-xl:before:bg-linear-to-b max-xl:before:to-transparent">
        <Backdrop image="lit" />
        <CharacterSection />
        <DownloadSection />
        <RulesSection />
      </section>
    </section>
  );
};

export { VoicebankPage };
