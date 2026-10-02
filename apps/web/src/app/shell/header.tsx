import type { ReactNode } from "react";

import { HomeLink } from "./home-link";
import { NavMenu } from "./nav-menu";

const NAV_LABEL = "Main navigation";

const Header = (): ReactNode => (
  <header className="bg-background/30 fixed inset-x-0 top-0 z-40 py-2 backdrop-blur-md">
    <nav aria-label={NAV_LABEL} className="mx-auto flex w-19/20 items-center justify-between px-8">
      <HomeLink />
      <NavMenu />
    </nav>
  </header>
);

export { Header };
