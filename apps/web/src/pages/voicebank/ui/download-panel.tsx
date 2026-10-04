import { Dialog } from "radix-ui";
import type { ComponentProps, ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadBody } from "./download-body";
import { DownloadImage } from "./download-image";

type OpenAutoFocusHandler = NonNullable<ComponentProps<typeof Dialog.Content>["onOpenAutoFocus"]>;

const focusFirstLink: OpenAutoFocusHandler = (event) => {
  event.preventDefault();
  if (event.currentTarget instanceof HTMLElement) {
    const link = event.currentTarget.querySelector("a");
    if (link instanceof HTMLElement) {
      link.focus();
    }
  }
};

const DownloadPanel = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <Dialog.Content
    onOpenAutoFocus={focusFirstLink}
    className="grid-cols-modal h-modal-h w-modal-w rounded-card border-modal-border bg-modal shadow-modal fixed top-1/2 left-1/2 z-10000 grid -translate-1/2 overflow-hidden border border-solid p-8 outline-none"
  >
    <DownloadImage item={item} />
    <DownloadBody item={item} />
  </Dialog.Content>
);

export { DownloadPanel };
