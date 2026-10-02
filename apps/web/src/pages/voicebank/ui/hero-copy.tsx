import type { ReactNode } from "react";

import { Paragraphs } from "#/shared/ui/paragraphs";

const TAGLINE = ["優しさと吐息が香る", "穏やかな男声ソフトウェア。"] as const;
const DESCRIPTION = [
  ["「離途」は、LitMusによるオリジナルキャラクター。"],
  ["読み上げ合成音声「VOICEVOX」", "歌唱合成音声「UTAU」にて", "無料で使用することができます。"],
  [
    "また、合成音声の枠組みにとらわれず",
    "バーチャルシンガーとして",
    "ジャンルレスな活動を行っています。",
  ],
] as const;

const HeroCopy = (): ReactNode => (
  <div className="ms-44 flex flex-col items-start gap-6">
    <h2 className="text-4xl leading-relaxed whitespace-nowrap">
      {TAGLINE.map((line) => (
        <span key={line} className="bg-primary block w-fit">
          {line}
        </span>
      ))}
    </h2>
    <div className="text-secondary-foreground flex flex-col gap-4 leading-normal">
      <Paragraphs paragraphs={DESCRIPTION} />
    </div>
  </div>
);

export { HeroCopy };
