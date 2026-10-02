import type { ReactNode } from "react";

import { cn } from "#/shared/lib/utils";

type MarkerTone = "name" | "title";

const toneClass: Readonly<Record<MarkerTone, string>> = {
  name: "marker-name",
  title: "marker-title",
};

const Marker = ({
  children,
  tone = "name",
}: Readonly<{ children: ReactNode; tone?: MarkerTone }>): ReactNode => (
  <span className="relative isolate inline-flex items-center leading-none">
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 top-marker-top bottom-marker-bottom -z-10",
        toneClass[tone],
      )}
    />
    <span className="py-marker leading-marker relative block">{children}</span>
  </span>
);

export type { MarkerTone };
export { Marker };
