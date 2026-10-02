import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import { DialogClose } from "./dialog-close";

const DialogContent = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <Dialog.Portal data-slot="dialog-portal">
    <Dialog.Overlay
      data-slot="dialog-overlay"
      className="bg-background/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-md"
    />
    <Dialog.Content
      data-slot="dialog-content"
      className="border-primary/20 bg-popover text-popover-foreground shadow-glow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid h-7/10 w-4/5 -translate-1/2 grid-cols-5 overflow-hidden rounded-lg border p-8 outline-none"
    >
      {children}
      <DialogClose />
    </Dialog.Content>
  </Dialog.Portal>
);

export { DialogContent };
