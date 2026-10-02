import type { ReactNode } from "react";

import type { Work } from "#/pages/works/model/works";

const WorkInfo = ({ work }: Readonly<{ work: Work }>): ReactNode => (
  <div className="bg-background/50 flex h-full flex-col items-center justify-between gap-1 p-4 pb-6 text-center">
    <p className="text-xs">{work.requester}</p>
    <h3 className="text-2xl">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="after:absolute after:inset-0"
      >
        {work.title}
      </a>
    </h3>
    <p>{work.description}</p>
  </div>
);

export { WorkInfo };
