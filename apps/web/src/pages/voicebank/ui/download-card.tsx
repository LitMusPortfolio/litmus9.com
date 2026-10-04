import { useAtom } from "@effect/atom-react";
import { Dialog } from "radix-ui";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { downloadDialogAtom } from "#/pages/voicebank/model/download-state";
import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadCardFace } from "./download-card-face";
import { DownloadDetail } from "./download-detail";

const DownloadCard = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => {
  const [dialog, setDialog] = useAtom(downloadDialogAtom);
  const change = useCallback(
    (open: boolean) => {
      if (open) {
        setDialog({ status: "open", item });
      } else {
        setDialog({ status: "closed" });
      }
    },
    [item, setDialog],
  );
  return (
    <Dialog.Root
      open={dialog.status === "open" && dialog.item.id === item.id}
      onOpenChange={change}
    >
      <DownloadCardFace item={item} />
      <DownloadDetail item={item} />
    </Dialog.Root>
  );
};

export { DownloadCard };
