import { Option } from "effect";

const SHORT_HOST = "youtu.be";
const PATH_SEPARATOR = "/";
const LIVE_PREFIX = "/live/";
const VIDEO_PARAM = "v";

const videoIdOf = (link: string): string | null => {
  const url = new URL(link);
  if (url.hostname === SHORT_HOST) {
    return url.pathname.slice(PATH_SEPARATOR.length);
  }
  if (url.pathname.startsWith(LIVE_PREFIX)) {
    return url.pathname.slice(LIVE_PREFIX.length);
  }
  return url.searchParams.get(VIDEO_PARAM);
};

const youtubeThumbnailOf = (link: string): Option.Option<string> =>
  Option.fromNullishOr(videoIdOf(link)).pipe(
    Option.filter((id) => id !== ""),
    Option.map((id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`),
  );

export { youtubeThumbnailOf };
