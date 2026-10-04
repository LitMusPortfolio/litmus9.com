import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type TitleSpacing = "flush" | "spaced";

const spacingClass: Readonly<Record<TitleSpacing, string>> = {
  flush: "",
  spaced: "mt-12",
};

const TitleWithLine = ({
  title,
  spacing = "flush",
}: Readonly<{ title: string; spacing?: TitleSpacing }>): ReactNode => (
  <div className={cn("mb-6 flex w-full items-center", spacingClass[spacing])}>
    <h2>{title}</h2>
    <div className="bg-foreground ml-4 h-0.5 flex-1 opacity-80" />
  </div>
);

export type { TitleSpacing };
export { TitleWithLine };
