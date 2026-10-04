import type { ReactNode } from "react";

import type { Work } from "#/pages/works/model/works";

const WorkInfo = ({ work }: Readonly<{ work: Work }>): ReactNode => (
  <div className="gap-tight bg-veil-strong mobile:p-3 flex h-full flex-col items-center justify-between p-4 pb-6">
    <p className="text-2xs">{work.requester}</p>
    <h3 className="mobile:text-md">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="after:absolute after:inset-0"
      >
        {work.title}
      </a>
    </h3>
    <p className="mobile:text-caption">{work.description}</p>
  </div>
);

export { WorkInfo };
