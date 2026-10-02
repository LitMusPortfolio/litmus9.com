import { Option } from "effect";
import { PlayIcon } from "lucide-react";
import type { ReactNode } from "react";

import { youtubeThumbnailOf } from "#/shared/lib/youtube";

const YoutubeThumbnail = ({ link, title }: Readonly<{ link: string; title: string }>): ReactNode =>
  Option.match(youtubeThumbnailOf(link), {
    onNone: () => <span aria-hidden="true" className="bg-background block size-full" />,
    onSome: (src) => (
      <>
        <img src={src} alt={title} loading="lazy" className="size-full object-cover" />
        <PlayIcon
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-12 -translate-1/2 fill-current opacity-80 drop-shadow-lg"
        />
      </>
    ),
  });

export { YoutubeThumbnail };
