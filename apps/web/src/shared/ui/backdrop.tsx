import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type BackdropImage = "litmus" | "lit";

const imageClass: Readonly<Record<BackdropImage, string>> = {
  litmus: "bg-litmus",
  lit: "bg-lit",
};

const Backdrop = ({ image }: Readonly<{ image: BackdropImage }>): ReactNode => (
  <div aria-hidden="true" className="absolute inset-0 -z-1000">
    <div
      className={cn(
        "size-full bg-cover bg-fixed bg-center mobile:sticky mobile:top-0 mobile:h-svh mobile:bg-scroll",
        imageClass[image],
      )}
    />
  </div>
);

export type { BackdropImage };
export { Backdrop };
