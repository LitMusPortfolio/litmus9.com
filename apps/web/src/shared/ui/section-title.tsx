import type { ReactNode } from "react";

import { Marker } from "./marker";
import type { MarkerTone } from "./marker";

const SectionTitle = ({
  children,
  tone = "name",
}: Readonly<{ children: string; tone?: MarkerTone }>): ReactNode => (
  <h1 className="mb-8 flex flex-col items-start">
    <Marker tone={tone}>{children}</Marker>
  </h1>
);

export { SectionTitle };
