import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "#/pages/home";

const LEGACY_HASH_REDIRECT =
  'if (location.hash.startsWith("#/")) location.replace(location.hash.slice(1));';

const Route = createFileRoute("/")({
  head: () => ({ scripts: [{ children: LEGACY_HASH_REDIRECT }] }),
  component: HomePage,
});

export { Route };
