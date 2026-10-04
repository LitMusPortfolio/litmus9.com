import { Link } from "@tanstack/react-router";
import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

import { NAV_LINK_CLASS } from "./nav-link-class";

const MenuPageLink = ({
  to,
  label,
}: Readonly<{ to: "/about" | "/works" | "/voicebank" | "/contact"; label: string }>): ReactNode => (
  <Dialog.Close asChild>
    <Link to={to} className={NAV_LINK_CLASS}>
      {label}
    </Link>
  </Dialog.Close>
);

export { MenuPageLink };
