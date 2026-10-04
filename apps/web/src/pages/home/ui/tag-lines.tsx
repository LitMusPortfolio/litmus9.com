import type { ReactNode } from "react";

import { Marker } from "#/shared/ui";

const TAG_LINES = [
  ["#MUSIC", "#VOCALOIDPRODUCE"],
  ["#ILLUSTRATION", "#DESIGN"],
  ["#3D", "#MOVIE", "#SYNTHETIC VOICE"],
] as const;

const TagLines = (): ReactNode => (
  <div className="mt-16 flex flex-col gap-4">
    {TAG_LINES.map((tags) => (
      <div key={tags.join(" ")} className="font-montserrat flex flex-wrap justify-start gap-4">
        {tags.map((tag) => (
          <Marker key={tag}>{tag}</Marker>
        ))}
      </div>
    ))}
  </div>
);

export { TagLines };
