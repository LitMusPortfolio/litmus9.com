import type { ReactNode } from "react";

const BulletItem = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <li>{children}</li>
);

export { BulletItem };
