import { useAtomSet } from "@effect/atom-react";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { downloadDialogAtom } from "#/pages/voicebank/model/download-state";
import type { DownloadItem } from "#/pages/voicebank/model/downloads";

const DownloadCard = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => {
  const setDialog = useAtomSet(downloadDialogAtom);
  const open = useCallback(() => {
    setDialog({ status: "open", item });
  }, [item, setDialog]);
  return (
    <button
      type="button"
      aria-label={item.name}
      onClick={open}
      className="border-foreground/10 bg-foreground/5 hover:border-primary/50 hover:shadow-glow-lg flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border text-start backdrop-blur-md transition hover:-translate-y-2.5"
    >
      <span className="bg-background block aspect-video w-full overflow-hidden">
        <img src={item.image} alt="" loading="lazy" className="size-full object-cover" />
      </span>
      <span className="bg-background/50 flex flex-1 flex-col justify-between p-6">
        <span className="font-heading my-2 block text-2xl leading-snug">{item.name}</span>
        <span className="text-muted-foreground my-2 block text-sm leading-normal">
          {item.summary}
        </span>
      </span>
    </button>
  );
};

export { DownloadCard };
