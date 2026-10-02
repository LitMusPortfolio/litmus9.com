import type { ReactNode } from "react";

const PAGE_TOP_LABEL = "ページの一番上に移動";

const PageTopLink = (): ReactNode => (
  <a href="#top" aria-label={PAGE_TOP_LABEL} className="w-page-top">
    <img src="/001_top/FooterPageTop.svg" alt="" className="w-full" />
  </a>
);

export { PageTopLink };
