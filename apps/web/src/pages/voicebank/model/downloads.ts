type DownloadType = "talk" | "sing" | "other";

type DownloadLink = Readonly<{ text: string; url: string }>;

type DownloadItem = Readonly<{
  id: string;
  type: DownloadType;
  name: string;
  summary: string;
  image: string;
  paragraphs: readonly string[];
  links: readonly DownloadLink[];
}>;

const FREE_DOWNLOAD = "無料ダウンロード";
const FOLLOW_RULES = "使用する際には利用規約に則ってご使用ください。";

const DOWNLOADS: readonly DownloadItem[] = [
  {
    id: "voicevox",
    type: "talk",
    name: "VOICEVOX 離途",
    summary: "無料で使える中品質なテキスト読み上げソフトウェア",
    image: "/102_DOWNLOAD/01_VOICEVOX.png",
    paragraphs: [
      "商用・非商用問わず無料で使用可能。すぐに使えるソフトウェアです。",
      "優しさと吐息が香る、穏やかな男声で読み上げます。",
      "使用する際には「VOICEVOX 離途」のクレジット表記を必ず行ってください。",
    ],
    links: [{ text: "VOICEVOX公式サイトへ", url: "https://voicevox.hiroshiba.jp" }],
  },
  {
    id: "utau-flow",
    type: "sing",
    name: "離途 -FLOW-",
    summary: "豊かな声色で感情的な歌唱が可能な大容量のライブラリ",
    image: "/102_DOWNLOAD/02_UTAU_Flow.png",
    paragraphs: [
      "優しさと吐息が香る、男声UTAUライブラリ。 AIによる音声補間技術を使用し、大容量の音源数で表情豊かに歌い上げます。",
      "連続音+VC音素切り出しで細やかな調声が可能。OpenUtau対応。 A#2、F3、A#3、D4、F4、A#4の6音階を搭載し、 NORMAL、DARK、SOLLOW、SOLID、POWERFULの 5つの声色を使い分けることが可能。",
      "有料アペンドライブラリの「離途 - HABIT-」を追加することで さらなる表現も可能になります。",
    ],
    links: [
      {
        text: FREE_DOWNLOAD,
        url: "https://drive.google.com/drive/folders/1t5JduvLjoz1r-MwR8FmM_KhBWalYQlrq?usp=drive_link",
      },
    ],
  },
  {
    id: "utau-habit",
    type: "sing",
    name: "離途 -HABIT-",
    summary: "癖と勢いのある発音をコンセプトとした有料アペンドライブラリ",
    image: "/102_DOWNLOAD/03_UTAU_Habit.png",
    paragraphs: [
      "癖と勢いのある発音をコンセプトとした有料アペンドライブラリ。 語尾音は4種類収録。様々な人間的歌唱表現を可能とします。",
      "連続音+VC音素切り出し済み。 D4の1音階を収録したデータの他、 AI補間によりA#2、F3、A#3、D4、F4、A#4の6音階に拡張したデータを同梱。",
      "離途-HABIT-単体でも動作しますが、 「離途 -FLOW-」と併用することを推奨しています。",
    ],
    links: [{ text: "BOOTHで購入", url: "https://litmus9.booth.pm/items/6193924" }],
  },
  {
    id: "utau-original-v2",
    type: "sing",
    name: "離途 -ORIGINAL V2-",
    summary: "LitMusが収録した無加工の音声のみを収録したレガシーライブラリ",
    image: "/102_DOWNLOAD/04_UTAU_OliginalV2.png",
    paragraphs: [
      "LitMusが収録した無加工の音声のみを収録したレガシーライブラリ。 現在は「離途FLOW」の使用を推奨しています。",
      "連続音+VC音素切り出し済み。 A#2、F3、A#3、F4の4音階を収録。",
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/310978" }],
  },
  {
    id: "mycoeiroink",
    type: "talk",
    name: "MYCOEIROINK 離途",
    summary: "寂しさと吐息感を意識して収録したトーク用レガシーライブラリ",
    image: "/102_DOWNLOAD/05_MYCOEIROINK.png",
    paragraphs: [
      "無料で使用可能な合成音声。レガシーライブラリ。 現在は「VOICEVOX 離途」の使用を推奨しています。 優しさと吐息が香る、穏やかな男声で読み上げます。",
      "使用する際には「MYCOEIROINK 離途」のクレジット表記を必ず行ってください。",
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/314288" }],
  },
  {
    id: "illustrations",
    type: "other",
    name: "離途立ち絵イラスト",
    summary: "これまでの離途の立ち絵イラストを一括でダウンロード",
    image: "/102_DOWNLOAD/06_ALL_Illust.png",
    paragraphs: [
      "これまでの離途の立ち絵イラストを一括でダウンロード。 使用する際には利用規約に則ってご使用ください。",
      "収録内容 :  離途UTAU、離途VOICEVOX、離途 -ORIGINAL-、離途 -ORIGINAL V2-、離途 -FLOW-",
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/337131" }],
  },
  {
    id: "chibi-psd",
    type: "other",
    name: "離途ちびキャライラストPSD",
    summary: "PSDTool対応の差分ありのちびキャライラスト",
    image: "/102_DOWNLOAD/07_tibi_psd.png",
    paragraphs: [
      "読み上げ動画での使用を想定した、 PSDTool対応の差分ありのちびキャライラストです。 レイヤー分けされた差分で、様々な表情やポーズをカスタマイズ。",
      FOLLOW_RULES,
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/337132" }],
  },
  {
    id: "extra-voice",
    type: "other",
    name: "離途エクストラボイス素材",
    summary: "CVを担当するLitMus本人が、離途をイメージして収録したボイス集",
    image: "/102_DOWNLOAD/08_Extra_voice.png",
    paragraphs: [
      "CVを担当するLitMus本人が、離途をイメージして収録したボイス集。 挨拶や掛け声、感情表現のほか、 さつまいもの品種を42種類読み上げた音声などを収録。",
      FOLLOW_RULES,
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/337133" }],
  },
  {
    id: "chibi-3d",
    type: "other",
    name: "ちびりと3D",
    summary: "ローポリゴンのかわいらしい3Dモデル",
    image: "/102_DOWNLOAD/09_tibi_3D.png",
    paragraphs: [
      "ローポリゴンで表現された、ちび3Dモデル。 ちいさな手足でいっしょうけんめい踊ります。",
      "fbx形式と、MMDでの使用を想定したpmx形式を収録。 モデリング：林津子（@Ri2g_）",
      FOLLOW_RULES,
    ],
    links: [{ text: FREE_DOWNLOAD, url: "https://bowlroll.net/file/337134" }],
  },
];

export type { DownloadItem, DownloadType };
export { DOWNLOADS };
