import { useAtom } from "@effect/atom-react";
import { Dialog } from "radix-ui";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { downloadDialogAtom } from "#/pages/voicebank/model/download-state";

import { DownloadDetail } from "./download-detail";

const DownloadDialog = (): ReactNode => {
  const [dialog, setDialog] = useAtom(downloadDialogAtom);
  const change = useCallback(
    (open: boolean) => {
      if (!open) {
        setDialog({ status: "closed" });
      }
    },
    [setDialog],
  );
  return (
    <Dialog.Root open={dialog.status === "open"} onOpenChange={change}>
      {dialog.status === "open" && <DownloadDetail item={dialog.item} />}
    </Dialog.Root>
  );
};

export { DownloadDialog };
