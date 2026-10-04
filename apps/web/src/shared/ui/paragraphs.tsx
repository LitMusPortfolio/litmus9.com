import type { ReactNode } from "react";

import { Lines } from "./lines";

const Paragraphs = ({
  paragraphs,
}: Readonly<{ paragraphs: readonly (readonly string[])[] }>): ReactNode =>
  paragraphs.map((lines) => (
    <p key={lines.join("\n")}>
      <Lines lines={lines} />
    </p>
  ));

export { Paragraphs };
