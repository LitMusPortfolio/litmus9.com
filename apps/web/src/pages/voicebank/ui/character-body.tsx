import type { ReactNode } from "react";

import type { CharacterMode } from "#/pages/voicebank/model/character-state";
import { useCharacterMode } from "#/pages/voicebank/model/character-state";
import { SectionTitle } from "#/shared/ui";

import { CharacterProfile } from "./character-profile";
import { ResearchLogs } from "./research-logs";

const TITLE = "CHARACTER";
const CONTENT: Readonly<Record<CharacterMode["status"], () => ReactNode>> = {
  profile: CharacterProfile,
  corrupted: ResearchLogs,
};

const CharacterBody = (): ReactNode => {
  const mode = useCharacterMode();
  const Content = CONTENT[mode.status];
  return (
    <>
      <div className="w-spacer shrink-0 transition-all duration-300 max-xl:hidden" />
      <div className="flex flex-1 flex-col justify-end">
        <SectionTitle tone="title">{TITLE}</SectionTitle>
        <Content />
      </div>
    </>
  );
};

export { CharacterBody };
