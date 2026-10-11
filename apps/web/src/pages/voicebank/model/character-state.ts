import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { Atom } from "effect/reactivity";

type CharacterMode = Readonly<{ status: "profile" }> | Readonly<{ status: "corrupted" }>;

const characterModeAtom = Atom.make<CharacterMode>({ status: "profile" });

const useCharacterMode = (): CharacterMode => useAtomValue(characterModeAtom);

const useSetCharacterMode = (): ((mode: CharacterMode) => void) => useAtomSet(characterModeAtom);

export type { CharacterMode };
export { useCharacterMode, useSetCharacterMode };
