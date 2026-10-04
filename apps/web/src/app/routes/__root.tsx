import { createRootRoute } from "@tanstack/react-router";

import { RootDocument } from "#/app/shell/root-document";

import appCss from "#/app/styles.css?url";

const TITLE = "LitMus9 - LitMus Official Website";
const DESCRIPTION =
  "LitMusの公式ウェブサイトです。ポートフォリオのほか、合成音声ライブラリ「離途」のVOICEVOX、UTAU音源を配布しています。";
const SITE_URL = "https://litmus9.com/";
const OGP_IMAGE = "/OGP_Main.png";

const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: "LitMus,離途,Lit,UTAU,VOICEVOX,音楽制作,イラスト,動画制作,合成音声",
      },
      { name: "author", content: "LitMus" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OGP_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OGP_IMAGE },
      { name: "theme-color", content: "#6B46C1" },
    ],
    links: [
      { rel: "icon", type: "image/webp", href: "/favicon.webp" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootDocument,
});

export { Route };
