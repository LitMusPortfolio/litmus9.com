import type { ReactNode } from "react";

import { Container } from "#/shared/ui";

import { CharacterBody } from "./character-body";

const CHARACTER_ALT = "離途 キャラクター";

const CharacterSection = (): ReactNode => (
  <section id="character" className="relative flex min-h-screen items-center justify-center py-16">
    <div className="absolute bottom-0 left-0 -z-10 h-19/20">
      <img
        src="/201_Lit立ち絵/LitB.webp"
        alt={CHARACTER_ALT}
        width="900"
        height="1056"
        loading="lazy"
        className="drop-shadow-glow-lg h-full w-auto object-contain object-left-bottom"
      />
    </div>
    <Container>
      <CharacterBody />
    </Container>
  </section>
);

export { CharacterSection };
