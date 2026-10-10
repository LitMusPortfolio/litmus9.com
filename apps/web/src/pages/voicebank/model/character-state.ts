import { Atom } from "effect/reactivity";

type CharacterMode = Readonly<{ status: "profile" }> | Readonly<{ status: "corrupted" }>;

const characterModeAtom = Atom.make<CharacterMode>({ status: "profile" });

export type { CharacterMode };
export { characterModeAtom };
