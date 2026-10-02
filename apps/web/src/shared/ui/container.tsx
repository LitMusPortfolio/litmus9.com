import type { ReactNode } from "react";

const Container = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <div className="relative mx-auto w-17/20 px-14 py-7">{children}</div>
);

export { Container };
