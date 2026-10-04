import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type BackdropImage = "litmus" | "lit";

const imageClass: Readonly<Record<BackdropImage, string>> = {
  litmus: "bg-litmus",
  lit: "bg-lit",
};

const Backdrop = ({ image }: Readonly<{ image: BackdropImage }>): ReactNode => (
  <div
    aria-hidden="true"
    className={cn("absolute inset-0 -z-1000 bg-cover bg-fixed bg-center", imageClass[image])}
  />
);

export type { BackdropImage };
export { Backdrop };
