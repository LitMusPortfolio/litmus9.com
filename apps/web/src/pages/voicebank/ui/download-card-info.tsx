import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

const DownloadCardInfo = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <div className="flex flex-1 flex-col justify-between p-6">
    <h3 className="leading-heading text-ink my-2">{item.name}</h3>
    <p className="text-caption text-foreground-muted my-2 leading-normal">{item.summary}</p>
  </div>
);

export { DownloadCardInfo };
