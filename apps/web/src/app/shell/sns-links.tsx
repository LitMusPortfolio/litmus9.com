import type { ReactNode } from "react";

import { SocialLinks } from "#/shared/ui";

const SNS_LABEL = "SNS";

const SnsLinks = (): ReactNode => (
  <div className="flex items-center gap-4">
    <span className="me-2">{SNS_LABEL}</span>
    <SocialLinks size="sm" />
  </div>
);

export { SnsLinks };
