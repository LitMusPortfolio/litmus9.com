import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadPanel } from "./download-panel";

const DownloadDetail = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <Dialog.Portal>
    <Dialog.Overlay className="bg-overlay backdrop-blur-glass fixed top-0 left-0 z-9999 size-full">
      <DownloadPanel item={item} />
    </Dialog.Overlay>
  </Dialog.Portal>
);

export { DownloadDetail };
