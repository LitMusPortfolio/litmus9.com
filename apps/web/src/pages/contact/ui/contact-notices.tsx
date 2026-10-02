import type { ReactNode } from "react";

import { TitledList } from "#/shared/ui/titled-list";

import { EmailItem } from "./email-item";

const SECONDARY_USE = {
  title: "楽曲の二次利用について",
  items: [
    "LitMus楽曲の二次利用について、各種SNS上での非営利の個人的な活動については、連絡なしで使用いただいて結構です。良識の範囲内でご使用ください。",
    "商用利用したい方や企業の方のご利用は、以下メールアドレスより、お問い合わせください。",
  ],
} as const;
const REQUESTS = {
  title: "お仕事について",
  items: [
    "絵柄合わせ・実績非公開の依頼につきましては原則お受けしておりません。また、全年齢向け作品のみお受けしております。",
    "以下のメールアドレスよりご連絡ください。",
  ],
} as const;

const ContactNotices = (): ReactNode => (
  <div className="flex w-3/5 flex-col gap-8">
    <TitledList title={SECONDARY_USE.title} items={SECONDARY_USE.items} />
    <TitledList title={REQUESTS.title} items={REQUESTS.items}>
      <EmailItem />
    </TitledList>
  </div>
);

export { ContactNotices };
