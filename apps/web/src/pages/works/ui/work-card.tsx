import type { ReactNode } from "react";

import type { Work } from "#/pages/works/model/works";

import { WorkInfo } from "./work-info";
import { YoutubeThumbnail } from "./youtube-thumbnail";

const WorkCard = ({ work }: Readonly<{ work: Work }>): ReactNode => (
  <article className="rounded-glass border-glass-border bg-veil backdrop-blur-glass hover:shadow-card-hover relative flex h-full cursor-pointer flex-col overflow-hidden border border-solid transition-all duration-300 hover:-translate-y-1">
    <div className="bg-background pb-thumb-ratio relative w-full overflow-hidden">
      <YoutubeThumbnail link={work.link} title={work.title} />
    </div>
    <WorkInfo work={work} />
  </article>
);

export { WorkCard };
