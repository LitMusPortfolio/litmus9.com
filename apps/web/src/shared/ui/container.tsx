import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type ContainerLayout = "block" | "row";

const layoutClass: Readonly<Record<ContainerLayout, string>> = {
  block: "",
  row: "flex h-full items-center gap-12 tablet:flex-col tablet:items-stretch",
};

const Container = ({
  layout = "block",
  children,
}: Readonly<{ layout?: ContainerLayout; children: ReactNode }>): ReactNode => (
  <div
    className={cn(
      "relative z-2 mx-auto w-container px-container-x py-container-y mobile:w-full mobile:px-4",
      layoutClass[layout],
    )}
  >
    {children}
  </div>
);

export type { ContainerLayout };
export { Container };
