import { useAtom } from "@effect/atom-react";
import { Array as Arr, Option } from "effect";
import type { Writable } from "effect/unstable/reactivity/Atom";
import { Tabs } from "radix-ui";
import { useCallback } from "react";
import type { ReactNode } from "react";

type FilterTab<Value extends string> = Readonly<{ value: Value; label: string }>;

const FilterTabs = <Value extends string>({
  label,
  tabs,
  atom,
  children,
}: Readonly<{
  label: string;
  tabs: readonly FilterTab<Value>[];
  atom: Writable<Value>;
  children: ReactNode;
}>): ReactNode => {
  const [value, setValue] = useAtom(atom);
  const change = useCallback(
    (next: string) => {
      Option.map(
        Arr.findFirst(tabs, (candidate) => candidate.value === next),
        (tab) => {
          setValue(tab.value);
        },
      );
    },
    [tabs, setValue],
  );
  return (
    <Tabs.Root value={value} onValueChange={change}>
      <Tabs.List
        aria-label={label}
        className="after:bg-border mb-8 flex items-center gap-8 after:ms-8 after:h-0.5 after:flex-1"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="after:bg-primary hover:text-primary focus-visible:outline-primary relative px-6 py-4 whitespace-nowrap transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:scale-x-0 after:transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=active]:after:scale-x-100"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value={value}>{children}</Tabs.Content>
    </Tabs.Root>
  );
};

export type { FilterTab };
export { FilterTabs };
