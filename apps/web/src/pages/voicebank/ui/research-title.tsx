import type { ReactNode } from "react";

const TITLE = "螳滄ｨ謎ｽ?髮｢騾?";
const READABLE_TITLE = "離途の研究記録";

const ResearchTitle = (): ReactNode => (
  <div className="mb-6 flex w-full items-center">
    <h2 aria-label={READABLE_TITLE}>
      <span aria-hidden="true">{TITLE}</span>
    </h2>
    <div className="bg-foreground ml-4 h-0.5 flex-1 opacity-80" />
  </div>
);

export { ResearchTitle };
