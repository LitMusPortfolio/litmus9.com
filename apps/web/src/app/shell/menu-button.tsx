import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

const OPEN_LABEL = "メニューを開く";
const BARS = ["top", "middle", "bottom"] as const;

const MenuButton = (): ReactNode => (
  <Dialog.Trigger asChild>
    <button
      type="button"
      aria-label={OPEN_LABEL}
      className="tablet:flex hidden size-10 cursor-pointer flex-col items-center justify-center gap-1.5 border-none bg-transparent p-0"
    >
      {BARS.map((bar) => (
        <span key={bar} aria-hidden="true" className="bg-foreground block h-0.5 w-6" />
      ))}
    </button>
  </Dialog.Trigger>
);

export { MenuButton };
