import type { ReactNode } from "react";

const TitleWithLine = ({ title }: Readonly<{ title: string }>): ReactNode => (
  <div className="mb-6 flex w-full items-center gap-4">
    <h2 className="text-4xl">{title}</h2>
    <span aria-hidden="true" className="bg-foreground/80 h-0.5 flex-1" />
  </div>
);

export { TitleWithLine };
