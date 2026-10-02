import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadLinks } from "./download-links";
import { DownloadParagraphs } from "./download-paragraphs";

const DownloadBody = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <div className="col-span-3 flex h-full flex-col p-16">
    <div className="mb-8 flex w-full items-center gap-4">
      <Dialog.Title className="text-3xl font-semibold whitespace-nowrap">{item.name}</Dialog.Title>
      <span aria-hidden="true" className="bg-foreground/80 h-0.5 flex-1" />
    </div>
    <DownloadParagraphs paragraphs={item.paragraphs} />
    <DownloadLinks links={item.links} />
  </div>
);

export { DownloadBody };
