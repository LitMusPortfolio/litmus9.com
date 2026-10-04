import { useAtomValue } from "@effect/atom-react";
import type { ReactNode } from "react";

import { downloadFilterAtom } from "#/pages/voicebank/model/download-state";
import { DOWNLOADS } from "#/pages/voicebank/model/downloads";

import { DownloadCard } from "./download-card";

const DownloadGrid = (): ReactNode => {
  const filter = useAtomValue(downloadFilterAtom);
  return (
    <div className="card-grid">
      {DOWNLOADS.filter((item) => filter === "all" || item.type === filter).map((item) => (
        <DownloadCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { DownloadGrid };
