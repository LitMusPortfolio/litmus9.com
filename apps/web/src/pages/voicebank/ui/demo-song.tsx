import type { ReactNode } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const DemoSong = ({ title, embedId }: Readonly<{ title: string; embedId: string }>): ReactNode => (
  <div className="rounded-demo bg-hairline relative aspect-video overflow-hidden">
    <LiteYouTubeEmbed id={embedId} title={title} />
  </div>
);

export { DemoSong };
