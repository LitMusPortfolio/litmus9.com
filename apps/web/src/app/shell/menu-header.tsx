import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

const TITLE = "Menu";
const CLOSE_LABEL = "メニューを閉じる";
const CLOSE_GLYPH = "×";
const DESCRIPTION = "サイト内の各ページへ移動します";

const MenuHeader = (): ReactNode => (
  <div className="flex items-center justify-between">
    <Dialog.Title className="font-montserrat text-caption text-foreground-muted tracking-widest uppercase">
      {TITLE}
    </Dialog.Title>
    <Dialog.Description className="sr-only">{DESCRIPTION}</Dialog.Description>
    <Dialog.Close
      aria-label={CLOSE_LABEL}
      className="text-h3 size-10 cursor-pointer border-none bg-transparent p-0 leading-none"
    >
      {CLOSE_GLYPH}
    </Dialog.Close>
  </div>
);

export { MenuHeader };
