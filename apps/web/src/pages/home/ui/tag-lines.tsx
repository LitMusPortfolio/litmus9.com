import type { ReactNode } from "react";

import { Marker } from "#/shared/ui";

const TAG_LINES = [
  ["#MUSIC", "#VOCALOIDPRODUCE"],
  ["#ILLUSTRATION", "#DESIGN"],
  ["#3D", "#MOVIE", "#SYNTHETIC VOICE"],
] as const;

const TagLines = (): ReactNode => (
  <div className="mobile:mt-6 mobile:gap-2 mt-16 flex flex-col gap-4">
    {TAG_LINES.map((tags) => (
      <div
        key={tags.join(" ")}
        className="font-montserrat mobile:gap-x-3 mobile:gap-y-1 mobile:text-caption flex flex-wrap justify-start gap-4"
      >
        {tags.map((tag) => (
          <Marker key={tag}>{tag}</Marker>
        ))}
      </div>
    ))}
  </div>
);

export { TagLines };
