import type { ReactNode } from "react";

import type { CharacterMode } from "#/pages/voicebank/model/character-state";
import { FramedImage } from "#/shared/ui";

const FIGURES: Readonly<Record<CharacterMode["status"], Readonly<{ src: string; alt: string }>>> = {
  profile: { src: "/101_Lit/Lit_UTAU_halflsize.webp", alt: "離途 キャラクター" },
  corrupted: { src: "/101_Lit/Lit_UTAU_bug.webp", alt: "ノイズに覆われた離途のシルエット" },
};

const CharacterFigure = ({ status }: Readonly<{ status: CharacterMode["status"] }>): ReactNode => (
  <div className="h-character-figure absolute bottom-0 left-0 z-1 w-auto">
    <FramedImage
      key={status}
      src={FIGURES[status].src}
      alt={FIGURES[status].alt}
      variant="anchored-figure"
    />
  </div>
);

export { CharacterFigure };
