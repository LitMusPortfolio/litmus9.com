import type { ReactNode } from "react";

import { TitleWithLine } from "#/shared/ui";

import { DemoSong } from "./demo-song";

const TITLE = "デモソング";
const SONGS = [
  {
    title: "僕の人生は僕だけのものだった/離途",
    link: "https://www.youtube.com/watch?v=szoC6fCe4dU",
  },
  { title: "牢 - 離途", link: "https://www.youtube.com/watch?v=Am0LJH7ipv0" },
] as const;

const DemoSongs = (): ReactNode => (
  <div className="mt-8 w-full">
    <TitleWithLine title={TITLE} />
    <div className="grid grid-cols-2 gap-8">
      {SONGS.map((song) => (
        <DemoSong key={song.link} title={song.title} link={song.link} />
      ))}
    </div>
  </div>
);

export { DemoSongs };
