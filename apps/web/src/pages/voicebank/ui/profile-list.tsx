import type { ReactNode } from "react";

type ProfileEntry = Readonly<{ label: string; value: string }>;

const ProfileList = ({ entries }: Readonly<{ entries: readonly ProfileEntry[] }>): ReactNode => (
  <dl className="flex flex-col gap-4">
    {entries.map((entry) => (
      <div key={entry.label} className="flex w-full items-center">
        <dt>{entry.label}</dt>
        <span aria-hidden="true" className="bg-foreground mx-4 h-px flex-1" />
        <dd className="whitespace-nowrap">{entry.value}</dd>
      </div>
    ))}
  </dl>
);

export type { ProfileEntry };
export { ProfileList };
