import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { NAV_ITEM_CLASS, NAV_LINK_CLASS } from "./nav-link-class";
import { ShopLink } from "./shop-link";

const PAGES = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/voicebank", label: "Voicebank" },
] as const;
const CONTACT = { to: "/contact", label: "Contact" } as const;

const NavMenu = (): ReactNode => (
  <ul className="flex-row gap-8">
    {PAGES.map((page) => (
      <li key={page.to} className={NAV_ITEM_CLASS}>
        <Link to={page.to} className={NAV_LINK_CLASS}>
          {page.label}
        </Link>
      </li>
    ))}
    <li className={NAV_ITEM_CLASS}>
      <ShopLink />
    </li>
    <li className={NAV_ITEM_CLASS}>
      <Link to={CONTACT.to} className={NAV_LINK_CLASS}>
        {CONTACT.label}
      </Link>
    </li>
  </ul>
);

export { NavMenu };
