import type { ReactNode } from "react";

const BulletItem = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <li className="bullet flex gap-2">{children}</li>
);

export { BulletItem };
