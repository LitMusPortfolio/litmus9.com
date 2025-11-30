// 型定義
type DownloadLink = {
  text: string;
  url: string;
};

type DownloadItem = {
  id: number;
  type: "talk" | "sing" | "other";
  category: string;
  name: string;
  description: string;
  image?: string;
  links?:
    | {
        primary?: DownloadLink;
        secondary?: DownloadLink;
        tertiary?: DownloadLink;
      }
    | DownloadLink[];
  modalContent?: {
    description: string[][];
    links?: DownloadLink[];
  };
};

// 型をエクスポート
export type { DownloadItem };
