import type { ReactNode } from "react";

import { Marker } from "#/shared/ui";

import { TagLines } from "./tag-lines";

const TITLE = "LITMUS";

const HomeIntro = (): ReactNode => (
  <div className="absolute bottom-32 left-12 z-1 text-left">
    <h1 className="motion-safe:animate-rise-in m-0 leading-none">
      <Marker>{TITLE}</Marker>
    </h1>
    <TagLines />
  </div>
);

export { HomeIntro };
