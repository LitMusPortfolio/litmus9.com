import type { ReactNode } from "react";

import { HomeLink } from "./home-link";
import { MobileMenu } from "./mobile-menu";
import { NavMenu } from "./nav-menu";

const NAV_LABEL = "Main navigation";

const Header = (): ReactNode => (
  <header className="bg-veil backdrop-blur-glass fixed top-0 right-0 left-0 z-9999 py-2">
    <nav
      aria-label={NAV_LABEL}
      className="max-w-nav mobile:px-4 mx-auto flex items-center justify-between px-8"
    >
      <HomeLink />
      <NavMenu />
      <MobileMenu />
    </nav>
  </header>
);

export { Header };
