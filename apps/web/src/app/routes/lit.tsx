import { createFileRoute, redirect } from "@tanstack/react-router";

const Route = createFileRoute("/lit")({
  beforeLoad: (): void => {
    redirect({ to: "/voicebank", statusCode: 301, throw: true });
  },
});

export { Route };
