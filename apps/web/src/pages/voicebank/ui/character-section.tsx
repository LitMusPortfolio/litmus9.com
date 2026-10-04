import { useAtomValue } from "@effect/atom-react";
import type { ReactNode } from "react";

import { characterModeAtom } from "#/pages/voicebank/model/character-state";
import { cn } from "#/shared/lib";
import { Container, FramedImage } from "#/shared/ui";

import { CharacterBody } from "./character-body";
import { TruthButton } from "./truth-button";

const CHARACTER_ALT = "離途 キャラクター";

const CharacterSection = (): ReactNode => {
  const mode = useAtomValue(characterModeAtom);
  return (
    <section
      id="character"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center py-16"
    >
      {mode.status === "corrupted" && (
        <div aria-hidden="true" className="bg-background absolute inset-0 z-0" />
      )}
      <div
        className={cn(
          "h-character absolute bottom-0 left-0 z-1 w-auto transition-all duration-300",
          mode.status === "corrupted" && "motion-safe:animate-glitch grayscale",
        )}
      >
        <FramedImage src="/201_Lit立ち絵/LitB.webp" alt={CHARACTER_ALT} variant="anchored-figure" />
      </div>
      <TruthButton />
      <Container layout="row">
        <CharacterBody />
      </Container>
    </section>
  );
};

export { CharacterSection };
