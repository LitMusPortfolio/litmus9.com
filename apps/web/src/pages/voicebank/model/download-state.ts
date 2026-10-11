import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { Atom } from "effect/reactivity";

import type { DownloadItem, DownloadType } from "./downloads";

type DownloadFilter = DownloadType | "all";

type DownloadDialogState =
  | Readonly<{ status: "closed" }>
  | Readonly<{ status: "open"; item: DownloadItem }>;

const downloadFilterAtom = Atom.make<DownloadFilter>("all");

const downloadDialogAtom = Atom.make<DownloadDialogState>({ status: "closed" });

const useDownloadFilter = (): DownloadFilter => useAtomValue(downloadFilterAtom);

const useSetDownloadFilter = (): ((filter: DownloadFilter) => void) =>
  useAtomSet(downloadFilterAtom);

const useDownloadDialog = (): DownloadDialogState => useAtomValue(downloadDialogAtom);

const useSetDownloadDialog = (): ((dialog: DownloadDialogState) => void) =>
  useAtomSet(downloadDialogAtom);

export type { DownloadFilter };
export { useDownloadDialog, useDownloadFilter, useSetDownloadDialog, useSetDownloadFilter };
