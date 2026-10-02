import { make } from "effect/unstable/reactivity/Atom";

import type { WorkCategory } from "./works";

type WorksFilter = WorkCategory | "all";

const worksFilterAtom = make<WorksFilter>("all");

export type { WorksFilter };
export { worksFilterAtom };
