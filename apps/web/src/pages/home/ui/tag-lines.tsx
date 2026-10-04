import type { ReactNode } from "react";

import { cn } from "#/shared/lib";
import { Marker } from "#/shared/ui";

const TAG_LINES = [
  { tags: ["#MUSIC", "#VOCALOIDPRODUCE"], delay: "motion-safe:animation-delay-300" },
  { tags: ["#ILLUSTRATION", "#DESIGN"], delay: "motion-safe:animation-delay-500" },
  { tags: ["#3D", "#MOVIE", "#SYNTHETIC VOICE"], delay: "motion-safe:animation-delay-700" },
] as const;

const TagLines = (): ReactNode => (
  <div className="mobile:mt-6 mobile:gap-2 mt-16 flex flex-col gap-4">
    {TAG_LINES.map((line) => (
      <div
        key={line.tags.join(" ")}
        className={cn(
          "font-montserrat tracking-latin motion-safe:animate-rise-in mobile:gap-x-3 mobile:gap-y-1 mobile:text-caption flex flex-wrap justify-start gap-4",
          line.delay,
        )}
      >
        {line.tags.map((tag) => (
          <Marker key={tag}>{tag}</Marker>
        ))}
      </div>
    ))}
  </div>
);

export { TagLines };
