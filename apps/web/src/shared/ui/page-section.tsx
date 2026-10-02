import type { ReactNode } from "react";

import { Backdrop } from "./backdrop";
import type { BackdropImage } from "./backdrop";
import { Container } from "./container";
import { DecorationHalf } from "./decoration-half";

const PageSection = ({
  backdrop,
  decoration,
  children,
}: Readonly<{ backdrop: BackdropImage; decoration: string; children: ReactNode }>): ReactNode => (
  <section className="relative isolate min-h-screen py-16">
    <Backdrop image={backdrop} />
    <DecorationHalf src={decoration} side="right" />
    <DecorationHalf src={decoration} side="left" />
    <Container>{children}</Container>
  </section>
);

export { PageSection };
