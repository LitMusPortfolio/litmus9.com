import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "#/pages/contact";

const Route = createFileRoute("/_site/contact")({ component: ContactPage });

export { Route };
