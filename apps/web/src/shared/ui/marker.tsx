import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type MarkerTone = "name" | "title";

const toneClass: Readonly<Record<MarkerTone, string>> = {
  name: "marker-name",
  title: "marker-title",
};

const Marker = ({
  children,
  tone = "name",
}: Readonly<{ children: ReactNode; tone?: MarkerTone }>): ReactNode => (
  <span className="marker-strut relative inline-flex items-center leading-none">
    <span
      aria-hidden="true"
      className={cn(
        "absolute top-marker-top bottom-marker-bottom -left-hair -right-hair -z-1 block bg-auto-full bg-center bg-repeat-x",
        toneClass[tone],
      )}
    />
    <span className="py-marker-y leading-marker relative z-2 block">{children}</span>
  </span>
);

export type { MarkerTone };
export { Marker };
