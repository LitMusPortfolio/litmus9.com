import type { ReactNode } from "react";

import { Lines, Paragraphs, TitleWithLine } from "#/shared/ui";

const NAME = "LitMus";
const ROLES = [
  "音楽 / イラスト / デザイン",
  "動画 / ディレクション / 合成音声用ライブラリ提供",
] as const;
const PROFILE = [
  ["2000年9月9日生まれ。"],
  [
    "2022年よりボーカロイドのMVイラストを担当。",
    "イラストを描く傍ら、動画制作にも興味を持ち制作を始める。",
    "また、2024年4月より音楽制作を開始する。",
  ],
  [
    "ジャンルに囚われず様々な分野の制作に挑戦するのが好き。",
    "メインの活動を定義せず、音楽もイラストも動画も同じ熱量で活動している。",
  ],
  [
    "合成音声に深く興味を持ち、オープンソースであるOpenUtauの開発に携わったり、合成音声ライブラリ「離途」では自分が音声提供からイラスト、楽曲制作までマルチに制作を行う。",
  ],
  ["好きな食べ物は回鍋肉。"],
] as const;

const AboutProfile = (): ReactNode => (
  <div className="col-span-7">
    <TitleWithLine title={NAME} />
    <h3 className="mb-4 text-2xl">
      <Lines lines={ROLES} />
    </h3>
    <div className="flex flex-col gap-4">
      <Paragraphs paragraphs={PROFILE} />
    </div>
  </div>
);

export { AboutProfile };
