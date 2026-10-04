import { make } from "effect/unstable/reactivity/Atom";

type MenuState = "closed" | "open";

const menuAtom = make<MenuState>("closed");

export { menuAtom };
