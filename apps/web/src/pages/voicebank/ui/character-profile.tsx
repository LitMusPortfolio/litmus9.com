import type { ReactNode } from "react";

import { TitleWithLine } from "#/shared/ui";

import { DemoSongs } from "./demo-songs";
import { ProfileColumns } from "./profile-columns";

const NAME = "離途";

const CharacterProfile = (): ReactNode => (
  <>
    <TitleWithLine title={NAME} />
    <ProfileColumns />
    <DemoSongs />
  </>
);

export { CharacterProfile };
