import type { ReactNode } from "react";

import type { DownloadItem } from "#/pages/voicebank/model/downloads";
import { FramedImage } from "#/shared/ui";

const DownloadImage = ({ item }: Readonly<{ item: DownloadItem }>): ReactNode => (
  <div className="mobile:p-2 flex items-center justify-center overflow-hidden p-8">
    <FramedImage src={item.image} alt={item.name} loading="eager" variant="cover" />
  </div>
);

export { DownloadImage };
