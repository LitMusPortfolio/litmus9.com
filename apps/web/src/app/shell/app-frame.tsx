import { RegistryProvider } from "@effect/atom-react";
import type { ReactNode } from "react";

import { Header } from "./header";

const AppFrame = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <RegistryProvider>
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  </RegistryProvider>
);

export { AppFrame };
