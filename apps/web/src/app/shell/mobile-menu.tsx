import { useAtom } from "@effect/atom-react";
import { Dialog } from "radix-ui";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { MenuButton } from "./menu-button";
import { MenuDrawer } from "./menu-drawer";
import { menuAtom } from "./menu-state";

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
