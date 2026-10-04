import { make } from "effect/unstable/reactivity/Atom";

import type { DownloadItem, DownloadType } from "./downloads";

type DownloadFilter = DownloadType | "all";

type DownloadDialogState =
  | Readonly<{ status: "closed" }>
  | Readonly<{ status: "open"; item: DownloadItem }>;

const downloadFilterAtom = make<DownloadFilter>("all");

const downloadDialogAtom = make<DownloadDialogState>({ status: "closed" });

export type { DownloadFilter };
export { downloadDialogAtom, downloadFilterAtom };
