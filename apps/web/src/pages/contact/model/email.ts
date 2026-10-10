import { Atom } from "effect/reactivity";

type EmailVisibility = "hidden" | "revealed";

const emailVisibilityAtom = Atom.make<EmailVisibility>("hidden");

export { emailVisibilityAtom };
