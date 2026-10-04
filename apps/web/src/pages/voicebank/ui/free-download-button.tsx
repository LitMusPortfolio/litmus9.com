import type { ReactNode } from "react";

const DOWNLOAD_LABEL = "FREE DL";
const DOWNLOADS_SELECTOR = "#downloads";

const scrollToDownloads = (): void => {
  const target = document.querySelector(DOWNLOADS_SELECTOR);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const FreeDownloadButton = (): ReactNode => (
  <button
    type="button"
    onClick={scrollToDownloads}
    className="bg-free-dl text-dl text-ink shadow-free-dl float-lift hover:bg-free-dl-hover hover:shadow-free-dl-hover tablet:right-1/2 tablet:bottom-8 tablet:shift-half-x mobile:right-4 mobile:left-4 mobile:transform-none mobile:px-10 mobile:py-4 mobile:text-h3 motion-safe:animate-float absolute right-16 bottom-16 z-10 cursor-pointer rounded-full border-none px-8 py-32 font-bold tracking-widest whitespace-nowrap uppercase transition-all duration-300"
  >
    {DOWNLOAD_LABEL}
  </button>
);

export { FreeDownloadButton };
