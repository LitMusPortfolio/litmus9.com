import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { Atom } from "effect/reactivity";

import type { WorkCategory } from "./works";

type WorksFilter = WorkCategory | "all";

const worksFilterAtom = Atom.make<WorksFilter>("all");

const useWorksFilter = (): WorksFilter => useAtomValue(worksFilterAtom);

const useSetWorksFilter = (): ((filter: WorksFilter) => void) => useAtomSet(worksFilterAtom);

export type { WorksFilter };
export { useSetWorksFilter, useWorksFilter };
