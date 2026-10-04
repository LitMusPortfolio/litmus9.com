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
    className="bg-free-dl text-dl text-ink shadow-free-dl float-lift hover:bg-free-dl-hover hover:shadow-free-dl-hover tablet:inset-x-4 tablet:bottom-8 tablet:mx-auto tablet:max-w-sm tablet:transform-none tablet:px-10 tablet:py-4 tablet:text-h3 motion-safe:animate-float absolute right-16 bottom-16 z-10 cursor-pointer rounded-full border-none px-8 py-32 font-bold tracking-widest whitespace-nowrap uppercase transition-all duration-300"
  >
    {DOWNLOAD_LABEL}
  </button>
);

export { FreeDownloadButton };
