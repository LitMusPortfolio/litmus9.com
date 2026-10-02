import { MonitorIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Lines } from "#/shared/ui/lines";

const TITLE_LINES = ["PCでの閲覧を", "お願いいたします"] as const;
const MESSAGE_LINES = [
  "申し訳ございません。",
  "現在このサイトはスマートフォンに",
  "対応しておりません。",
] as const;
const SUB_MESSAGE_LINES = ["PCからアクセスしていただけますよう", "お願いいたします。"] as const;

const MobileNotice = (): ReactNode => (
  <div className="bg-indigo-night fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 p-8 text-center md:hidden">
    <MonitorIcon aria-hidden="true" className="text-primary size-16" />
    <h1 className="text-2xl font-bold">
      <Lines lines={TITLE_LINES} />
    </h1>
    <p className="text-secondary-foreground text-base">
      <Lines lines={MESSAGE_LINES} />
    </p>
    <p className="text-muted-foreground text-sm">
      <Lines lines={SUB_MESSAGE_LINES} />
    </p>
  </div>
);

export { MobileNotice };
