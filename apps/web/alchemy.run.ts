import { Stack } from "alchemy";
import { Website, providers, state } from "alchemy/Cloudflare";
import { Effect } from "effect";

const web = Website.Vite("Web", {
  observability: { enabled: true, traces: { enabled: true } },
  viteEnvironments: { entry: "ssr", children: ["rsc"] },
});

export default Stack(
  "web",
  { providers: providers(), state: state() },
  Effect.gen(function* stack() {
    const { url } = yield* web;
    return { url };
  }),
);
