import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { PageTopLink } from "./page-top-link";
import { SnsLinks } from "./sns-links";

const CONTACT_LABEL = "CONTACT";
const COPYRIGHT = "© 2022 - 2025 LitMus9_. All rights reserved.";

const Footer = (): ReactNode => (
  <footer className="border-foreground/10 bg-night relative grid grid-cols-2 gap-8 border-t px-24 py-12">
    <div className="flex flex-col items-start justify-center">
      <PageTopLink />
    </div>
    <div className="flex flex-col items-end justify-center gap-6">
      <SnsLinks />
      <Link to="/contact" className="rounded-full border px-16 py-2 text-sm">
        {CONTACT_LABEL}
      </Link>
      <p>{COPYRIGHT}</p>
    </div>
  </footer>
);

export { Footer };
