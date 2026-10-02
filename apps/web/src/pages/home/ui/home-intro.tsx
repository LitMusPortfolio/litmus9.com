import type { ReactNode } from "react";

import { Marker } from "#/shared/ui/marker";

import { TagLines } from "./tag-lines";

const TITLE = "LITMUS";

const HomeIntro = (): ReactNode => (
  <div className="absolute bottom-32 left-12 flex flex-col gap-16">
    <h1 className="text-display leading-none">
      <Marker>{TITLE}</Marker>
    </h1>
    <TagLines />
  </div>
);

export { HomeIntro };
