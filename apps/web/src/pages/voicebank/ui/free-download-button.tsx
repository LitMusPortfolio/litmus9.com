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
    className="bg-free-dl text-dl text-ink shadow-free-dl float-lift hover:bg-free-dl-hover hover:shadow-free-dl-hover max-xl:text-h3 motion-safe:animate-float absolute right-16 bottom-16 z-10 cursor-pointer rounded-full border-none px-8 py-32 font-bold tracking-widest whitespace-nowrap uppercase transition-all duration-300 max-xl:static max-xl:mt-8 max-xl:w-11/12 max-xl:max-w-sm max-xl:transform-none max-xl:px-10 max-xl:py-4"
  >
    {DOWNLOAD_LABEL}
  </button>
);

export { FreeDownloadButton };
