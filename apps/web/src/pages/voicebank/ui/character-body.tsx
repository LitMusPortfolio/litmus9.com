import type { ReactNode } from "react";

import { SectionTitle, TitleWithLine } from "#/shared/ui";

import { DemoSongs } from "./demo-songs";
import { ProfileColumns } from "./profile-columns";

const TITLE = "CHARACTER";
const NAME = "離途";

const CharacterBody = (): ReactNode => (
  <>
    <div className="w-spacer tablet:hidden shrink-0 transition-all duration-300" />
    <div className="flex flex-1 flex-col justify-end">
      <SectionTitle tone="title">{TITLE}</SectionTitle>
      <TitleWithLine title={NAME} />
      <ProfileColumns />
      <DemoSongs />
    </div>
  </>
);

export { CharacterBody };
