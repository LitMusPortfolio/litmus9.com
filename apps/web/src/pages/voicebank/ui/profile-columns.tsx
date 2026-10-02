import type { ReactNode } from "react";

import { ProfileList } from "./profile-list";
import type { ProfileEntry } from "./profile-list";

const PROFILE_LEFT: readonly ProfileEntry[] = [
  { label: "誕生日", value: "10月10日" },
  { label: "年齢", value: "不明" },
  { label: "身長", value: "180cm" },
  { label: "体重", value: "200kg" },
  { label: "一人称", value: "ボク" },
];
const PROFILE_RIGHT: readonly ProfileEntry[] = [
  { label: "趣味", value: "旅行、歌、瞑想" },
  { label: "好き", value: "日光浴、さつまいも" },
  { label: "嫌い", value: "わからない" },
  { label: "特筆事項", value: "記憶喪失" },
  { label: "目的", value: "自分が何者か知る" },
];

const ProfileColumns = (): ReactNode => (
  <div className="grid w-full grid-cols-10 gap-12">
    <div className="col-span-4">
      <ProfileList entries={PROFILE_LEFT} />
    </div>
    <div className="col-span-6">
      <ProfileList entries={PROFILE_RIGHT} />
    </div>
  </div>
);

export { ProfileColumns };
