import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { FramedImage } from "#/shared/ui";

const HOME_LABEL = "LitMus9 home";

const HomeLink = (): ReactNode => (
  <Link to="/" aria-label={HOME_LABEL} className="inline-block h-10">
    <FramedImage src="/001_top/LitMus9_logo.webp" alt="LitMus9" loading="eager" />
  </Link>
);

export { HomeLink };
