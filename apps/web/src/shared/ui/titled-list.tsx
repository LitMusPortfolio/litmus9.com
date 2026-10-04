import type { ReactNode } from "react";

import { BulletItem } from "./bullet-item";
import { BulletList } from "./bullet-list";
import { TitleWithLine } from "./title-with-line";
import type { TitleSpacing } from "./title-with-line";

const TitledList = ({
  title,
  items,
  spacing = "flush",
  children,
}: Readonly<{
  title: string;
  items: readonly string[];
  spacing?: TitleSpacing;
  children?: ReactNode;
}>): ReactNode => (
  <div>
    <TitleWithLine title={title} spacing={spacing} />
    <BulletList>
      {items.map((item) => (
        <BulletItem key={item}>{item}</BulletItem>
      ))}
      {children}
    </BulletList>
  </div>
);

export { TitledList };
