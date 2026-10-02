import type { ReactNode } from "react";

const Lines = ({ lines }: Readonly<{ lines: readonly string[] }>): ReactNode =>
  lines.map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));

export { Lines };
