import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const CONTACT_LABEL = "CONTACT";

const FooterContact = (): ReactNode => (
  <Link
    to="/contact"
    className="rounded-pill text-caption font-montserrat tracking-latin hover:bg-accent hover:border-accent block border border-solid px-16 py-2 transition-all duration-300 ease-in-out hover:scale-120"
  >
    {CONTACT_LABEL}
  </Link>
);

export { FooterContact };
