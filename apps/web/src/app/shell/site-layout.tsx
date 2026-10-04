import { Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Footer } from "./footer";

const SiteLayout = (): ReactNode => (
  <>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export { SiteLayout };
