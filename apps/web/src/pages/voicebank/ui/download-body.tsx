import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";

import { DownloadLinks } from "./download-links";
import { DownloadParagraphs } from "./download-paragraphs";

const DownloadBody = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <div className="p-16 max-xl:p-2">
    <div className="mb-8 flex w-full items-center">
      <Dialog.Title className="text-h2l max-xl:text-h3 m-0 font-semibold whitespace-nowrap max-xl:whitespace-normal">
        {item.name}
      </Dialog.Title>
      <div className="bg-foreground ml-4 h-0.5 flex-1 opacity-80" />
    </div>
    <div className="flex h-full flex-col">
      <DownloadParagraphs paragraphs={item.paragraphs} />
      <DownloadLinks links={item.links} />
    </div>
  </div>
);

export { DownloadBody };
