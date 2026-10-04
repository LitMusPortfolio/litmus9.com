import type { ReactNode } from "react";

import { Paragraphs } from "#/shared/ui";

const ResearchLog = ({
  title,
  paragraphs,
}: Readonly<{ title: string; paragraphs: readonly (readonly string[])[] }>): ReactNode => (
  <section className="text-caption">
    <h3 className="text-md font-montserrat tracking-latin">{title}</h3>
    <Paragraphs paragraphs={paragraphs} />
  </section>
);

export { ResearchLog };
