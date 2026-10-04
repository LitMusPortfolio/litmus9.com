import type { ReactNode } from "react";

import { Lines } from "#/shared/ui";

const ICON = "💻";
const TITLE_LINES = ["PCでの閲覧を", "お願いいたします"] as const;
const MESSAGE_LINES = [
  "申し訳ございません。",
  "現在このサイトはスマートフォンに",
  "対応しておりません。",
] as const;
const SUB_MESSAGE_LINES = ["PCからアクセスしていただけますよう", "お願いいたします。"] as const;

const MobileNotice = (): ReactNode => (
  <div className="bg-indigo-night mobile:flex fixed top-0 left-0 z-9999 hidden h-screen w-full flex-col items-center justify-center p-8 text-center">
    <div className="text-h1 text-primary mb-12">{ICON}</div>
    <h1 className="font-zen text-h3 tracking-body mb-8 font-bold">
      <Lines lines={TITLE_LINES} />
    </h1>
    <p className="font-zen text-md leading-body tracking-body text-foreground-soft mb-6">
      <Lines lines={MESSAGE_LINES} />
    </p>
    <p className="font-zen leading-body tracking-body text-foreground-muted text-sm">
      <Lines lines={SUB_MESSAGE_LINES} />
    </p>
  </div>
);

export { MobileNotice };
