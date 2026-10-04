import type { ReactNode } from "react";

const NEWS = "××× 2025/06/06 VOICEVOX離途 がリリース！ ×××";
const COPIES = ["lead", "echo", "tail", "rest"] as const;

const NewsTicker = (): ReactNode => (
  <div className="bg-background absolute right-0 bottom-0 left-0 overflow-hidden py-4">
    <p className="sr-only">{NEWS}</p>
    <div aria-hidden="true" className="motion-safe:animate-news flex w-max">
      {COPIES.map((copy) => (
        <span key={copy} className="squash-y block px-16 whitespace-nowrap">
          {NEWS}
        </span>
      ))}
    </div>
  </div>
);

export { NewsTicker };
