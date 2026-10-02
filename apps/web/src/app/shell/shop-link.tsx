import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "#/shared/lib/utils";

import { NAV_LINK_CLASS } from "./nav-link-class";

const SHOP_LABEL = "Shop";
const SHOP_URL = "https://litmus9.booth.pm";

const ShopLink = (): ReactNode => (
  <a
    href={SHOP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("inline-flex items-center", NAV_LINK_CLASS)}
  >
    {SHOP_LABEL}
    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
  </a>
);

export { ShopLink };
