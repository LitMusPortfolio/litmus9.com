import type { ReactNode } from "react";

type ProfileEntry = Readonly<{ label: string; value: string }>;

const ProfileList = ({ entries }: Readonly<{ entries: readonly ProfileEntry[] }>): ReactNode => (
  <div className="flex flex-col gap-4">
    {entries.map((entry) => (
      <div key={entry.label} className="flex w-full items-center">
        <span>{entry.label}</span>
        <div className="bg-foreground mx-4 h-px flex-1" />
        <span className="whitespace-nowrap">{entry.value}</span>
      </div>
    ))}
  </div>
);

export type { ProfileEntry };
export { ProfileList };
