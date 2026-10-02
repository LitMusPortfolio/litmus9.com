import { RegistryProvider } from "@effect/atom-react";
import type { ReactNode } from "react";

import { Header } from "./header";
import { MobileNotice } from "./mobile-notice";

const AppFrame = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <RegistryProvider>
    <Header />
    <main>{children}</main>
    <MobileNotice />
  </RegistryProvider>
);

export { AppFrame };
