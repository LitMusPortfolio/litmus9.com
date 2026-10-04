import type { ReactNode } from "react";

import { Copyright } from "./copyright";
import { FooterContact } from "./footer-contact";
import { PageTopLink } from "./page-top-link";
import { SnsLinks } from "./sns-links";

const Footer = (): ReactNode => (
  <footer className="border-hairline bg-night mobile:grid-cols-single mobile:px-6 mobile:py-8 relative z-2 grid grid-cols-2 gap-8 border-0 border-t border-solid px-24 py-12">
    <div className="mobile:items-center flex flex-col items-start justify-center">
      <PageTopLink />
    </div>
    <div className="mobile:items-center mobile:text-center flex flex-col items-end justify-center">
      <SnsLinks />
      <FooterContact />
      <Copyright />
    </div>
  </footer>
);

export { Footer };
