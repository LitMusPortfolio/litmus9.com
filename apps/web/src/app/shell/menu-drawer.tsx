import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import { MenuHeader } from "./menu-header";
import { MenuLinks } from "./menu-links";

const MenuDrawer = (): ReactNode => (
  <Dialog.Portal>
    <Dialog.Overlay className="bg-overlay backdrop-blur-glass fixed inset-0 z-9999" />
    <Dialog.Content className="bg-indigo-night border-hairline fixed inset-y-0 right-0 z-10000 flex w-3/4 flex-col gap-12 border-0 border-l border-solid px-8 py-6 outline-none">
      <MenuHeader />
      <MenuLinks />
    </Dialog.Content>
  </Dialog.Portal>
);

export { MenuDrawer };
