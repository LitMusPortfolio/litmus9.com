import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

const DownloadCardInfo = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <div className="bg-veil-strong mobile:p-3 flex flex-1 flex-col justify-between p-6">
    <h3 className="leading-heading text-ink mobile:text-md my-2">{item.name}</h3>
    <p className="text-caption text-foreground-muted my-2 leading-normal">{item.summary}</p>
  </div>
);

export { DownloadCardInfo };
