import { useAtomValue } from "@effect/atom-react";
import type { ReactNode } from "react";

import { characterModeAtom } from "#/pages/voicebank/model/character-state";
import { Container } from "#/shared/ui";

import { CharacterBody } from "./character-body";
import { CharacterFigure } from "./character-figure";
import { CorruptedBackdrop } from "./corrupted-backdrop";
import { TruthButton } from "./truth-button";

const CharacterSection = (): ReactNode => {
  const mode = useAtomValue(characterModeAtom);
  return (
    <section
      id="character"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center py-16"
    >
      {mode.status === "corrupted" && <CorruptedBackdrop />}
      <CharacterFigure status={mode.status} />
      <TruthButton />
      <Container layout="row">
        <CharacterBody />
      </Container>
    </section>
  );
};

export { CharacterSection };
