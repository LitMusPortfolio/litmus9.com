import type { ReactNode } from "react";

const BulletList = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <ul className="flex flex-col gap-4 ps-10">{children}</ul>
);

export { BulletList };
