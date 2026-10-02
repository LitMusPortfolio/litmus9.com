import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";
import { DialogContent } from "#/shared/ui/dialog-content";

import { DownloadBody } from "./download-body";

const DownloadDetail = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <DialogContent>
    <div className="col-span-2 flex items-center justify-center overflow-hidden p-8">
      <img src={item.image} alt={item.name} className="size-full object-cover" />
    </div>
    <DownloadBody item={item} />
  </DialogContent>
);

export { DownloadDetail };
