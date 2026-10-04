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
    className="bg-background text-dl text-ink font-montserrat hover:bg-violet-from hover:text-lit-pink max-xl:text-h3 motion-safe:animate-breathe-in breathe-hover absolute right-16 bottom-16 z-10 cursor-pointer rounded-full border-none px-8 py-32 tracking-widest whitespace-nowrap uppercase max-xl:static max-xl:col-start-1 max-xl:row-start-2 max-xl:mt-8 max-xl:w-11/12 max-xl:max-w-sm max-xl:justify-self-center max-xl:px-10 max-xl:py-4"
  >
    {DOWNLOAD_LABEL}
  </button>
);

export { FreeDownloadButton };
