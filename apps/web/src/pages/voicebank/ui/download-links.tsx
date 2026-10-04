import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadIcon } from "./download-icon";

const DownloadLinks = ({ links }: Readonly<{ links: DownloadItem["links"] }>): ReactNode => (
  <div className="motion-safe:animate-slide-in-up mt-auto mb-12 flex flex-col self-end max-xl:mt-4 max-xl:mb-2 max-xl:self-stretch">
    {links.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ripple rounded-button bg-shimmer py-modal-gap text-foreground hover:-translate-y-lift hover:shadow-link-hover active:-translate-y-press active:shadow-link-active motion-safe:animate-shimmer relative flex items-center justify-center gap-4 overflow-hidden border-2 border-solid border-transparent px-10 text-center whitespace-nowrap no-underline transition-all duration-300 ease-in-out max-xl:gap-2 max-xl:px-4"
      >
        <DownloadIcon />
        {link.text}
      </a>
    ))}
  </div>
);

export { DownloadLinks };
