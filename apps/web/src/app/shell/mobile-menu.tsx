import { useAtom } from "@effect/atom-react";
import { make } from "effect/unstable/reactivity/Atom";
import { Dialog } from "radix-ui";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { MenuButton } from "./menu-button";
import { MenuDrawer } from "./menu-drawer";

type MenuState = "closed" | "open";

const menuAtom = make<MenuState>("closed");

const MobileMenu = (): ReactNode => {
  const [menu, setMenu] = useAtom(menuAtom);
  const change = useCallback(
    (open: boolean) => {
      if (open) {
        setMenu("open");
      } else {
        setMenu("closed");
      }
    },
    [setMenu],
  );
  return (
    <Dialog.Root open={menu === "open"} onOpenChange={change}>
      <MenuButton />
      <MenuDrawer />
    </Dialog.Root>
  );
};

export { MobileMenu };
