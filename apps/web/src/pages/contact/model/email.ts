import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { Atom } from "effect/reactivity";

type EmailVisibility = "hidden" | "revealed";

const emailVisibilityAtom = Atom.make<EmailVisibility>("hidden");

const useEmailVisibility = (): EmailVisibility => useAtomValue(emailVisibilityAtom);

const useSetEmailVisibility = (): ((visibility: EmailVisibility) => void) =>
  useAtomSet(emailVisibilityAtom);

export { useEmailVisibility, useSetEmailVisibility };
