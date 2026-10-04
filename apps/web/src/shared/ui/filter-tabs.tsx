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
        className="tab-rule tablet:flex-wrap tablet:gap-2 tablet:after:hidden relative mb-8 flex items-center justify-start gap-4"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="rounded-pill font-montserrat tracking-latin text-caption border-foreground hover:bg-accent hover:border-accent aria-selected:bg-foreground aria-selected:text-background focus-visible:outline-primary relative w-32 cursor-pointer border border-solid bg-transparent py-2 text-center whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:hover:scale-110"
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
