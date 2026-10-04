import type { ReactNode } from "react";

const CorruptedBackdrop = (): ReactNode => (
  <>
    <div aria-hidden="true" className="bg-background absolute inset-0 z-0" />
    <div
      aria-hidden="true"
      className="scanlines motion-safe:animate-scan pointer-events-none absolute inset-0 z-4"
    />
    <div
      aria-hidden="true"
      className="static-noise motion-safe:animate-noise pointer-events-none absolute inset-0 z-4 opacity-15"
    />
  </>
);

export { CorruptedBackdrop };
