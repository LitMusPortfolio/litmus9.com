import type { ReactNode } from "react";

import { Container, FramedImage } from "#/shared/ui";

import { CharacterBody } from "./character-body";

const CHARACTER_ALT = "離途 キャラクター";

const CharacterSection = (): ReactNode => (
  <section
    id="character"
    className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center py-16"
  >
    <div className="h-character absolute bottom-0 left-0 z-1 w-auto transition-all duration-300">
      <FramedImage src="/201_Lit立ち絵/LitB.webp" alt={CHARACTER_ALT} variant="anchored-figure" />
    </div>
    <Container layout="row">
      <CharacterBody />
    </Container>
  </section>
);

export { CharacterSection };
