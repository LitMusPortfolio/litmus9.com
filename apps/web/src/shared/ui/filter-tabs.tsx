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
        className="tab-rule relative mb-8 flex items-center justify-start gap-8"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="tab-underline hover:text-primary focus-visible:outline-primary relative cursor-pointer border-none bg-transparent px-6 py-4 whitespace-nowrap transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2"
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
