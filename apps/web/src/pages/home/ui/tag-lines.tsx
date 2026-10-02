import type { ReactNode } from "react";

import { Marker } from "#/shared/ui";

const TAG_LINES = [
  ["#MUSIC", "#VOCALOIDPRODUCE"],
  ["#ILLUSTRATION", "#DESIGN"],
  ["#3D", "#MOVIE", "#SYNTHETIC VOICE"],
] as const;

const TagLines = (): ReactNode => (
  <ul className="font-display flex flex-col gap-4">
    {TAG_LINES.map((tags) => (
      <li key={tags.join(" ")} className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Marker key={tag}>{tag}</Marker>
        ))}
      </li>
    ))}
  </ul>
);

export { TagLines };
