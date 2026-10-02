import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const HOME_LABEL = "LitMus9 home";

const HomeLink = (): ReactNode => (
  <Link to="/" aria-label={HOME_LABEL} className="h-header inline-block">
    <img src="/001_top/LitMus9_logo.webp" alt="LitMus9" className="h-full w-auto" />
  </Link>
);

export { HomeLink };
