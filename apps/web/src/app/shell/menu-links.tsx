import type { ReactNode } from "react";

import { MenuPageLink } from "./menu-page-link";
import { CONTACT, PAGES } from "./nav-items";
import { NAV_ITEM_CLASS } from "./nav-link-class";
import { ShopLink } from "./shop-link";

const MenuLinks = (): ReactNode => (
  <ul className="text-h3 gap-8 p-0">
    {PAGES.map((page) => (
      <li key={page.to} className={NAV_ITEM_CLASS}>
        <MenuPageLink to={page.to} label={page.label} />
      </li>
    ))}
    <li className={NAV_ITEM_CLASS}>
      <ShopLink />
    </li>
    <li className={NAV_ITEM_CLASS}>
      <MenuPageLink to={CONTACT.to} label={CONTACT.label} />
    </li>
  </ul>
);

export { MenuLinks };
