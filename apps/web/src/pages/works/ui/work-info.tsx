import type { ReactNode } from "react";

import type { Work } from "#/pages/works/model/works";

const WorkInfo = ({ work }: Readonly<{ work: Work }>): ReactNode => (
  <div className="gap-tight bg-veil-strong flex h-full flex-col items-center justify-between p-4 pb-6 max-xl:justify-start max-xl:gap-1 max-xl:px-4 max-xl:py-3">
    <p className="text-2xs">{work.requester}</p>
    <h3 className="max-xl:text-body max-xl:leading-normal">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="after:absolute after:inset-0"
      >
        {work.title}
      </a>
    </h3>
    <p className="max-xl:text-caption max-xl:my-0 max-xl:leading-normal">{work.description}</p>
  </div>
);

export { WorkInfo };
