import type { ReactNode } from "react";

import { SectionTitle, TitleWithLine } from "#/shared/ui";

import { DemoSongs } from "./demo-songs";
import { ProfileColumns } from "./profile-columns";

const TITLE = "CHARACTER";
const NAME = "離途";

const CharacterBody = (): ReactNode => (
  <div className="flex h-full items-center gap-12">
    <div className="w-2/5 shrink-0" />
    <div className="flex flex-1 flex-col justify-end">
      <SectionTitle tone="title">{TITLE}</SectionTitle>
      <TitleWithLine title={NAME} />
      <ProfileColumns />
      <DemoSongs />
    </div>
  </div>
);

export { CharacterBody };
