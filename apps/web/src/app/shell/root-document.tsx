import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";

import { AppFrame } from "./app-frame";

const devtoolsPlugins = [{ name: "TanStack Router", render: <TanStackRouterDevtoolsPanel /> }];

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>): ReactNode => (
  <html lang="ja">
    <head>
      <HeadContent />
    </head>
    <body>
      <AppFrame>{children}</AppFrame>
      <TanStackDevtools plugins={devtoolsPlugins} />
      <Scripts />
    </body>
  </html>
);

export { RootDocument };
