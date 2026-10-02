import type { ReactNode } from "react";

import { BulletItem } from "./bullet-item";
import { BulletList } from "./bullet-list";
import { TitleWithLine } from "./title-with-line";

const TitledList = ({
  title,
  items,
  children,
}: Readonly<{ title: string; items: readonly string[]; children?: ReactNode }>): ReactNode => (
  <div>
    <TitleWithLine title={title} />
    <BulletList>
      {items.map((item) => (
        <BulletItem key={item}>{item}</BulletItem>
      ))}
      {children}
    </BulletList>
  </div>
);

export { TitledList };
