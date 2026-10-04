import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

import { Backdrop } from "./backdrop";
import type { BackdropImage } from "./backdrop";
import { Container } from "./container";
import { DecorationHalf } from "./decoration-half";
import type { DecorationGraphic } from "./decoration-half";

type SectionHeight = "screen" | "content";

const heightClass: Readonly<Record<SectionHeight, string>> = {
  screen: "min-h-screen",
  content: "min-h-0",
};

const PageSection = ({
  backdrop,
  decoration,
  height = "screen",
  children,
}: Readonly<{
  backdrop: BackdropImage;
  decoration: DecorationGraphic;
  height?: SectionHeight;
  children: ReactNode;
}>): ReactNode => (
  <section className={cn("relative bg-cover bg-fixed bg-center py-16", heightClass[height])}>
    <Backdrop image={backdrop} />
    <DecorationHalf graphic={decoration} side="right" />
    <DecorationHalf graphic={decoration} side="left" />
    <Container>{children}</Container>
  </section>
);

export type { SectionHeight };
export { PageSection };
