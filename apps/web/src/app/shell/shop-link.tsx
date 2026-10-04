import type { ReactNode } from "react";

import { NAV_LINK_CLASS } from "./nav-link-class";

const SHOP_LABEL = "Shop";
const SHOP_URL = "https://litmus9.booth.pm";

const ShopLink = (): ReactNode => (
  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className={NAV_LINK_CLASS}>
    {SHOP_LABEL}
    <span aria-hidden="true" className="external-link-icon" />
  </a>
);

export { ShopLink };
