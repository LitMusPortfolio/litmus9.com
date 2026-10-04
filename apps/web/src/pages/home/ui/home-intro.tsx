import type { ReactNode } from "react";

import { Marker } from "#/shared/ui";

import { TagLines } from "./tag-lines";

const TITLE = "LITMUS";

const HomeIntro = (): ReactNode => (
  <div className="mobile:bottom-36 mobile:left-4 mobile:right-4 absolute bottom-32 left-12 z-1 text-left">
    <h1 className="m-0 leading-none">
      <Marker>{TITLE}</Marker>
    </h1>
    <TagLines />
  </div>
);

export { HomeIntro };
