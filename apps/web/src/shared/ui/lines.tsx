import type { ReactNode } from "react";

const Lines = ({ lines }: Readonly<{ lines: readonly string[] }>): ReactNode => {
  const [first, ...rest] = lines;
  return [first, ...rest.flatMap((line) => [<br key={line} />, line])];
};

export { Lines };
