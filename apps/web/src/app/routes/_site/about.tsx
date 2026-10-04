import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "#/pages/about";

const Route = createFileRoute("/_site/about")({ component: AboutPage });

export { Route };
