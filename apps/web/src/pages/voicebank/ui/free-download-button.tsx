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
    className="bg-background text-dl text-ink font-montserrat hover:bg-violet-from hover:text-lit-pink tablet:right-1/2 tablet:bottom-8 tablet:shift-half-x motion-safe:animate-breathe-in breathe-hover absolute right-16 bottom-16 z-10 cursor-pointer rounded-full border-none px-8 py-32 tracking-widest uppercase"
  >
    {DOWNLOAD_LABEL}
  </button>
);

export { FreeDownloadButton };
