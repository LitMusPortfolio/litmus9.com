import type { ReactNode } from "react";

import { FramedImage } from "#/shared/ui";

const PAGE_TOP_LABEL = "ページの一番上に移動";
const PAGE_TOP_ALT = "Pageの一番上に移動するボタン。Page Topと書かれている。";

const PageTopLink = (): ReactNode => (
  <a
    href="#top"
    aria-label={PAGE_TOP_LABEL}
    className="w-page-top mobile:w-1/3 block cursor-pointer"
  >
    <FramedImage src="/001_top/FooterPageTop.svg" alt={PAGE_TOP_ALT} />
  </a>
);

export { PageTopLink };
