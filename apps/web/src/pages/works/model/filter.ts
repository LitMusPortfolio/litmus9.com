import { Atom } from "effect/reactivity";

import type { WorkCategory } from "./works";

type WorksFilter = WorkCategory | "all";

const worksFilterAtom = Atom.make<WorksFilter>("all");

export type { WorksFilter };
export { worksFilterAtom };
