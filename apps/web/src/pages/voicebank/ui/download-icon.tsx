import type { ReactNode } from "react";

const TITLE = "Download";

const DownloadIcon = (): ReactNode => (
  <span className="inline-flex size-6 items-center justify-center">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="size-full"
    >
      <title>{TITLE}</title>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </span>
);

export { DownloadIcon };
