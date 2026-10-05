import { useAtom } from "@effect/atom-react";
import { Array as Arr, Option } from "effect";
import type { Writable } from "effect/unstable/reactivity/Atom";
import { Tabs } from "radix-ui";
import { useCallback } from "react";
import type { ComponentProps, ReactNode } from "react";

import type { MarkerTone } from "./marker";
import { SectionTitle } from "./section-title";

type FilterTab<Value extends string> = Readonly<{ value: Value; label: string }>;

type FilterLayout = "inline" | "sticky";

type ListClickHandler = NonNullable<ComponentProps<typeof Tabs.List>["onClick"]>;

type LayoutStyle = Readonly<{
  root: string;
  bar: string;
  handleListClick?: ListClickHandler;
}>;

const VIEWPORT_TOP = 0;
const ROOT_SELECTOR = "[data-filter-tabs]";

const rewindToRoot: ListClickHandler = (event) => {
  const root = event.currentTarget.closest(ROOT_SELECTOR);
  if (root instanceof HTMLElement && root.getBoundingClientRect().top < VIEWPORT_TOP) {
    root.scrollIntoView({ block: "start" });
  }
};

const LAYOUT_STYLES: Readonly<Record<FilterLayout, LayoutStyle>> = {
  inline: { root: "", bar: "mb-8" },
  sticky: {
    root: "scroll-mt-header tablet:scroll-mt-header-compact",
    bar: "sticky top-header tablet:top-header-compact z-3 mb-8 py-4 bg-glass-light backdrop-blur-glass [&_h1]:mb-4",
    handleListClick: rewindToRoot,
  },
};

const renderTrigger = (tab: FilterTab<string>): ReactNode => (
  <Tabs.Trigger
    key={tab.value}
    value={tab.value}
    className="rounded-pill font-montserrat tracking-latin text-caption border-foreground hover:bg-accent hover:border-accent aria-selected:bg-foreground aria-selected:text-background focus-visible:outline-primary relative w-32 cursor-pointer border border-solid bg-transparent py-2 text-center whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:hover:scale-110"
  >
    {tab.label}
  </Tabs.Trigger>
);

const FilterTabs = <Value extends string>({
  title,
  tone = "name",
  layout = "inline",
  label,
  tabs,
  atom,
  children,
}: Readonly<{
  title: string;
  tone?: MarkerTone;
  layout?: FilterLayout;
  label: string;
  tabs: readonly FilterTab<Value>[];
  atom: Writable<Value>;
  children: ReactNode;
}>): ReactNode => {
  const [value, setValue] = useAtom(atom);
  const style = LAYOUT_STYLES[layout];
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
    <Tabs.Root data-filter-tabs value={value} onValueChange={change} className={style.root}>
      <div className={style.bar}>
        <SectionTitle tone={tone}>{title}</SectionTitle>
        <Tabs.List
          aria-label={label}
          onClick={style.handleListClick}
          className="tab-rule tablet:flex-wrap tablet:gap-2 tablet:after:hidden relative flex items-center justify-start gap-4"
        >
          {tabs.map((tab) => renderTrigger(tab))}
        </Tabs.List>
      </div>
      <Tabs.Content value={value}>{children}</Tabs.Content>
    </Tabs.Root>
  );
};

export type { FilterLayout, FilterTab };
export { FilterTabs };
