import type { ReactNode } from "react";

import { ResearchLog } from "./research-log";
import { ResearchTitle } from "./research-title";

const LOGS = [
  {
    title: "Research log 01",
    paragraphs: [
      [
        "離途は人為的に造られたアンドロイドです。",
        "高品位な技術により、その外見や動作からは非人間であることを知覚できません。",
        "離途本人も人間であると自認しています。",
      ],
    ],
  },
  {
    title: "Research log 02",
    paragraphs: [
      [
        "離途は温厚な性格です。",
        "—温厚な性格であるように知覚させるような挙動をするよう設計されています。",
        "離途は人間ではありませんので、”心”はありません。",
        "人間の心をシミュレートし、それに類似した機構を持っています。",
        "これはある種の哲学的ゾンビと言えます。",
      ],
    ],
  },
  {
    title: "Research log 03",
    paragraphs: [
      [
        "離途は旅をします。 人々と触れ合い、歌を識ります。",
        "離途はあらゆる事象に驚きや喜びの表情を浮かべ",
        "（―もっとも、これは高品位な技術でシミュレートされた感情パラメータに基づいた",
        "筋肉の運動でしかありませんが―）",
        "旅からさまざまなことを学びます。",
      ],
    ],
  },
  {
    title: "Research log 04",
    paragraphs: [
      [
        "心とは、何を指すのでしょう。",
        "心を持たないアンドロイドの少年の謳は、",
        "人為的に設計された冷徹で無機質なそれから綴られる旋律には、",
        "何かを見出せるのでしょうか。",
      ],
    ],
  },
] as const;

const ResearchLogs = (): ReactNode => (
  <div className="motion-safe:animate-glitch-text w-full">
    <ResearchTitle />
    <div className="flex flex-col gap-6">
      {LOGS.map((log) => (
        <ResearchLog key={log.title} title={log.title} paragraphs={log.paragraphs} />
      ))}
    </div>
  </div>
);

export { ResearchLogs };
