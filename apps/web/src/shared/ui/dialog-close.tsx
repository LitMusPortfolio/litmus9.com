import { XIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

const CLOSE_LABEL = "Close";

const DialogClose = (): ReactNode => (
  <Dialog.Close
    data-slot="dialog-close"
    className="focus-visible:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:outline-hidden"
  >
    <XIcon aria-hidden="true" className="size-6" />
    <span className="sr-only">{CLOSE_LABEL}</span>
  </Dialog.Close>
);

export { DialogClose };
