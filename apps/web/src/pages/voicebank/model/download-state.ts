import { Atom } from "effect/reactivity";

import type { DownloadItem, DownloadType } from "./downloads";

type DownloadFilter = DownloadType | "all";

type DownloadDialogState =
  | Readonly<{ status: "closed" }>
  | Readonly<{ status: "open"; item: DownloadItem }>;

const downloadFilterAtom = Atom.make<DownloadFilter>("all");

const downloadDialogAtom = Atom.make<DownloadDialogState>({ status: "closed" });

export type { DownloadFilter };
export { downloadDialogAtom, downloadFilterAtom };
