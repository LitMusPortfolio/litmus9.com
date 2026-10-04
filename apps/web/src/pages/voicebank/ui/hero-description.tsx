import type { ReactNode } from "react";

import { Lines } from "#/shared/ui";

const DESCRIPTION = [
  ["「離途」は、LitMusによるオリジナルキャラクター。"],
  ["読み上げ合成音声「VOICEVOX」", "歌唱合成音声「UTAU」にて", "無料で使用することができます。"],
  [
    "また、合成音声の枠組みにとらわれず",
    "バーチャルシンガーとして",
    "ジャンルレスな活動を行っています。",
  ],
] as const;

const HeroDescription = (): ReactNode => (
  <div className="text-description motion-safe:animate-fade-in motion-safe:animation-delay-1400">
    {DESCRIPTION.map((lines) => (
      <p key={lines.join("\n")} className="mb-desc mt-0 leading-normal last:mb-0">
        <Lines lines={lines} />
      </p>
    ))}
  </div>
);

export { HeroDescription };
