import { Effect } from "effect";
import type { ReactNode, RefCallback } from "react";

import { cn } from "#/shared/lib";

type VideoTone = "full" | "shade" | "dim";

const toneClass: Readonly<Record<VideoTone, string>> = {
  full: "opacity-100",
  shade: "opacity-75",
  dim: "opacity-50",
};

const startInlinePlayback: RefCallback<HTMLVideoElement> = (video) => {
  if (video === null) {
    return;
  }
  video.muted = true;
  video.setAttribute("playsinline", "");
  Effect.runFork(Effect.ignore(Effect.tryPromise(() => video.play())));
};

const BackgroundVideo = ({ src, tone }: Readonly<{ src: string; tone: VideoTone }>): ReactNode => (
  <div
    className={cn(
      "absolute top-1/2 left-1/2 -z-100 h-full min-h-full w-auto min-w-full -translate-1/2 overflow-hidden motion-reduce:hidden",
      toneClass[tone],
    )}
  >
    <video
      ref={startInlinePlayback}
      autoPlay
      loop
      muted
      preload="metadata"
      poster={`${src}.webp`}
      className="pointer-events-none size-full object-cover"
    >
      <source src={`${src}.mp4`} type="video/mp4" />
      <source src={`${src}.webm`} type="video/webm" />
    </video>
  </div>
);

export { BackgroundVideo };

export type { VideoTone };
