import { createFileRoute } from "@tanstack/react-router";

import { VoicebankPage } from "#/pages/voicebank";

const TITLE = "離途 Lit - VOICEVOX/UTAU音源 | LitMus9";
const DESCRIPTION =
  "合成音声ライブラリ「離途」のVOICEVOX、UTAU音源を無料配布しています。キャラクターボイスや楽曲制作にご利用ください。";
const OGP_IMAGE = "/OGP_Lit.png";

const Route = createFileRoute("/_site/voicebank")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OGP_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OGP_IMAGE },
    ],
  }),
  component: VoicebankPage,
});

export { Route };
