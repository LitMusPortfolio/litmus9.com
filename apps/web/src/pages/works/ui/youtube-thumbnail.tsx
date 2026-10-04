import { Option } from "effect";
import type { ReactNode } from "react";

import { youtubeThumbnailOf } from "#/pages/works/lib/youtube";

import { PlayOverlay } from "./play-overlay";

const YoutubeThumbnail = ({ link, title }: Readonly<{ link: string; title: string }>): ReactNode =>
  Option.match(youtubeThumbnailOf(link), {
    onNone: () => <div className="bg-background size-full" />,
    onSome: (src) => (
      <>
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute top-0 left-0 size-full object-cover text-transparent"
        />
        <PlayOverlay />
      </>
    ),
  });

export { YoutubeThumbnail };
