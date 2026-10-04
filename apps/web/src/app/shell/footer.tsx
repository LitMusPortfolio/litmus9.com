import type { ReactNode } from "react";

import { Copyright } from "./copyright";
import { FooterContact } from "./footer-contact";
import { PageTopLink } from "./page-top-link";
import { SnsLinks } from "./sns-links";

const Footer = (): ReactNode => (
  <footer className="border-hairline bg-night relative z-2 grid grid-cols-2 gap-8 border-0 border-t border-solid px-24 py-12">
    <div className="flex flex-col items-start justify-center">
      <PageTopLink />
    </div>
    <div className="flex flex-col items-end justify-center">
      <SnsLinks />
      <FooterContact />
      <Copyright />
    </div>
  </footer>
);

export { Footer };
