import { createFileRoute } from "@tanstack/react-router";

import { WorksPage, loadWorks } from "#/pages/works";

const Route = createFileRoute("/_site/works")({ loader: loadWorks, component: WorksPage });

export { Route };
