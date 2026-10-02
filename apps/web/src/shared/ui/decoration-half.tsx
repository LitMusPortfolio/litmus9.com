import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type DecorationSide = "left" | "right";

const sideClass: Readonly<Record<DecorationSide, string>> = {
  right: "-right-side-decoration-offset -z-20",
  left: "-left-side-decoration-offset -z-10",
};

const clipClass: Readonly<Record<DecorationSide, string>> = {
  right: "clip-top-half",
  left: "clip-bottom-half",
};

const DecorationHalf = ({
  src,
  side,
}: Readonly<{ src: string; side: DecorationSide }>): ReactNode => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none fixed top-1/2 h-side-decoration-height w-side-decoration -translate-y-1/2 -rotate-90",
      sideClass[side],
    )}
  >
    <img
      src={src}
      alt=""
      className={cn(
        "absolute top-1/2 left-1/2 h-full w-auto max-w-none -translate-1/2 opacity-80",
        clipClass[side],
      )}
    />
  </div>
);

export { DecorationHalf };

export type { DecorationSide };
