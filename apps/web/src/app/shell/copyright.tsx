import type { ReactNode } from "react";

const COPYRIGHT = `© 2022 - ${String(import.meta.env["VITE_BUILD_YEAR"])} LitMus9_. All rights reserved.`;

const Copyright = (): ReactNode => (
  <div className="pt-6">
    <p>{COPYRIGHT}</p>
  </div>
);

export { Copyright };
