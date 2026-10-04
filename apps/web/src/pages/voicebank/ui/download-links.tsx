import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadIcon } from "./download-icon";

const DownloadLinks = ({ links }: Readonly<{ links: DownloadItem["links"] }>): ReactNode => (
  <div className="motion-safe:animate-slide-in-up mobile:mt-4 mobile:mb-2 mobile:self-stretch mt-auto mb-12 flex flex-col self-end">
    {links.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ripple rounded-button bg-shimmer py-modal-gap text-foreground hover:-translate-y-lift hover:shadow-link-hover active:-translate-y-press active:shadow-link-active motion-safe:animate-shimmer mobile:px-6 relative flex items-center justify-center gap-4 overflow-hidden border-2 border-solid border-transparent px-10 text-center no-underline transition-all duration-300 ease-in-out"
      >
        <DownloadIcon />
        {link.text}
      </a>
    ))}
  </div>
);

export { DownloadLinks };
