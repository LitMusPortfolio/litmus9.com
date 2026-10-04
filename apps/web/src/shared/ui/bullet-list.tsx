import type { ReactNode } from "react";

const BulletList = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <ul>{children}</ul>
);

export { BulletList };
