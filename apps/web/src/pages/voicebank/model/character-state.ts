import { make } from "effect/unstable/reactivity/Atom";

type CharacterMode = Readonly<{ status: "profile" }> | Readonly<{ status: "corrupted" }>;

const characterModeAtom = make<CharacterMode>({ status: "profile" });

export type { CharacterMode };
export { characterModeAtom };
