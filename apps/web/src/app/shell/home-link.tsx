import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const HOME_LABEL = "LitMus9 home";

const HomeLink = (): ReactNode => (
  <Link to="/" aria-label={HOME_LABEL} className="block">
    <img
      src="/001_top/LitMus9_logo.webp"
      alt="LitMus9"
      loading="eager"
      className="mobile:h-7 block h-10 w-auto"
    />
  </Link>
);

export { HomeLink };
