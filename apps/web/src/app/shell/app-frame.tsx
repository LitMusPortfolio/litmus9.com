import { RegistryProvider } from "@effect/atom-react";
import type { ReactNode } from "react";

import { Header } from "./header";
import { MobileNotice } from "./mobile-notice";

const AppFrame = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <RegistryProvider>
    <div className="mobile:hidden flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
    <MobileNotice />
  </RegistryProvider>
);

export { AppFrame };
