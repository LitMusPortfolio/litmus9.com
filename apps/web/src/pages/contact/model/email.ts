import { make } from "effect/unstable/reactivity/Atom";

type EmailVisibility = "hidden" | "revealed";

const emailVisibilityAtom = make<EmailVisibility>("hidden");

export { emailVisibilityAtom };
