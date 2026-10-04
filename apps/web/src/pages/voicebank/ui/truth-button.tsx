import { useAtom } from "@effect/atom-react";
import { useCallback } from "react";
import type { ReactNode } from "react";

import type { CharacterMode } from "#/pages/voicebank/model/character-state";
import { characterModeAtom } from "#/pages/voicebank/model/character-state";
import { cn } from "#/shared/lib";
import { Lines } from "#/shared/ui";

const LABELS: Readonly<Record<CharacterMode["status"], readonly string[]>> = {
  profile: ["Do you want to", "know", "the truth?"],
  corrupted: ["He knows", "nothing."],
};
const TONES: Readonly<Record<CharacterMode["status"], string>> = {
  profile: "bg-background text-ink",
  corrupted: "bg-ink text-background",
};
const NEXT: Readonly<Record<CharacterMode["status"], CharacterMode>> = {
  profile: { status: "corrupted" },
  corrupted: { status: "profile" },
};

const TruthButton = (): ReactNode => {
  const [mode, setMode] = useAtom(characterModeAtom);
  const toggle = useCallback(() => {
    setMode(NEXT[mode.status]);
  }, [mode, setMode]);
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={mode.status === "corrupted"}
      className={cn(
        "diamond text-caption font-montserrat tracking-latin hover:bg-violet-from hover:text-lit-pink motion-safe:animate-breathe breathe-hover tablet:hidden absolute top-1/3 left-1/4 z-5 size-48 cursor-pointer border-none uppercase",
        TONES[mode.status],
      )}
    >
      <Lines lines={LABELS[mode.status]} />
    </button>
  );
};

export { TruthButton };
