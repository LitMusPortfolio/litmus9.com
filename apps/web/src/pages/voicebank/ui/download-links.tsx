import { DownloadIcon } from "lucide-react";
import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

const DownloadLinks = ({ links }: Readonly<{ links: DownloadItem["links"] }>): ReactNode => (
  <div className="mt-auto mb-12 flex flex-col gap-4 self-end">
    {links.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-shimmer bg-shimmer hover:shadow-glow-lg flex items-center justify-center gap-4 rounded-full px-10 py-5 transition hover:-translate-y-1 active:translate-y-0"
      >
        <DownloadIcon aria-hidden="true" className="size-6" />
        {link.text}
      </a>
    ))}
  </div>
);

export { DownloadLinks };
