import type { ReactNode } from "react";

import type { Work } from "#/pages/works/model/works";
import { YoutubeThumbnail } from "#/shared/ui";

import { WorkInfo } from "./work-info";

const WorkCard = ({ work }: Readonly<{ work: Work }>): ReactNode => (
  <article className="border-primary/30 bg-card hover:shadow-glow relative flex h-full flex-col overflow-hidden rounded-xl border backdrop-blur-md transition hover:-translate-y-1">
    <div className="bg-background relative aspect-video w-full overflow-hidden">
      <YoutubeThumbnail link={work.link} title={work.title} />
    </div>
    <WorkInfo work={work} />
  </article>
);

export { WorkCard };
