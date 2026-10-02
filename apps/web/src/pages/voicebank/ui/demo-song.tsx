import type { ReactNode } from "react";

import { YoutubeThumbnail } from "#/shared/ui";

const DemoSong = ({ title, link }: Readonly<{ title: string; link: string }>): ReactNode => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-muted hover:shadow-glow relative block aspect-video overflow-hidden rounded-lg transition"
  >
    <YoutubeThumbnail link={link} title={title} />
  </a>
);

export { DemoSong };
