import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type VideoTone = "full" | "dim";

const toneClass: Readonly<Record<VideoTone, string>> = {
  full: "opacity-100",
  dim: "opacity-50",
};

const BackgroundVideo = ({ src, tone }: Readonly<{ src: string; tone: VideoTone }>): ReactNode => (
  <video
    autoPlay
    loop
    muted
    className={cn(
      "absolute inset-0 -z-30 size-full object-cover motion-reduce:hidden",
      toneClass[tone],
    )}
  >
    <source src={`${src}.webm`} type="video/webm" />
    <source src={`${src}.mp4`} type="video/mp4" />
  </video>
);

export { BackgroundVideo };

export type { VideoTone };
