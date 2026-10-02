import { Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Footer } from "./footer";

const SiteLayout = (): ReactNode => (
  <>
    <Outlet />
    <Footer />
  </>
);

export { SiteLayout };
