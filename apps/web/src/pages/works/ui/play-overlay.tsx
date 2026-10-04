import type { ReactNode } from "react";

const PLAY_GLYPH = "▶";

const PlayOverlay = (): ReactNode => (
  <div
    aria-hidden="true"
    className="text-dl text-ink text-shadow-play pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 opacity-80"
  >
    {PLAY_GLYPH}
  </div>
);

export { PlayOverlay };
