import type { ReactNode } from "react";

import { BulletItem } from "#/shared/ui/bullet-item";

import { ProtectedEmail } from "./protected-email";

const EmailItem = (): ReactNode => (
  <BulletItem>
    <ProtectedEmail />
  </BulletItem>
);

export { EmailItem };
