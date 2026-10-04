import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const CONTACT_LABEL = "CONTACT";

const FooterContact = (): ReactNode => (
  <div className="rounded-pill text-caption flex flex-col items-end justify-center border border-solid px-16 py-2">
    <Link to="/contact">{CONTACT_LABEL}</Link>
  </div>
);

export { FooterContact };
