import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { CONTACT, PAGES } from "./nav-items";
import { NAV_ITEM_CLASS, NAV_LINK_CLASS } from "./nav-link-class";
import { ShopLink } from "./shop-link";

const NavMenu = (): ReactNode => (
  <ul className="mobile:hidden flex-row gap-8">
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
