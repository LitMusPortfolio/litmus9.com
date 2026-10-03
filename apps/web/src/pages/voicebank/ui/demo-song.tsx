import type { ReactNode } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const DemoSong = ({ title, embedId }: Readonly<{ title: string; embedId: string }>): ReactNode => (
  <div className="bg-muted overflow-hidden rounded-lg">
    <LiteYouTubeEmbed id={embedId} title={title} />
  </div>
);

export { DemoSong };
