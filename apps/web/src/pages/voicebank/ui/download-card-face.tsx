import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";
import { FramedImage } from "#/shared/ui";

import { DownloadCardInfo } from "./download-card-info";

const DownloadCardFace = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <article className="focus-ring-within min-w-card-min rounded-card border-hairline bg-frost backdrop-blur-glass hover:border-download-border-hover hover:shadow-download-hover relative flex h-full cursor-pointer flex-col overflow-hidden border border-solid transition-all duration-300 ease-in-out hover:-translate-y-2.5">
    <div className="bg-background pb-thumb-ratio relative w-full overflow-hidden">
      <FramedImage src={item.image} alt={item.name} variant="fill" />
    </div>
    <DownloadCardInfo item={item} />
    <Dialog.Trigger asChild>
      <button
        type="button"
        aria-label={item.name}
        className="absolute inset-0 z-1 cursor-pointer border-none bg-transparent p-0 outline-none"
      />
    </Dialog.Trigger>
  </article>
);

export { DownloadCardFace };
