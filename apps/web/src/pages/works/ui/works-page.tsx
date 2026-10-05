import type { ReactNode } from "react";

import type { WorksFilter } from "#/pages/works/model/filter";
import { worksFilterAtom } from "#/pages/works/model/filter";
import type { FilterTab } from "#/shared/ui";
import { FilterTabs, PageSection } from "#/shared/ui";

import SideTitle from "./side-title.svg?react";
import { WorksGrid } from "./works-grid";

const TABS: readonly FilterTab<WorksFilter>[] = [
  { value: "all", label: "ALL" },
  { value: "music", label: "MUSIC" },
  { value: "illustration", label: "ILLUST" },
  { value: "movie", label: "MOVIE" },
  { value: "direction", label: "DIRECTION" },
  { value: "other", label: "OTHER" },
];
const TABS_LABEL = "Filter works by category";
const TITLE = "WORKS";

const WorksPage = (): ReactNode => (
  <PageSection backdrop="litmus" decoration={SideTitle}>
    <FilterTabs title={TITLE} layout="sticky" label={TABS_LABEL} tabs={TABS} atom={worksFilterAtom}>
      <WorksGrid />
    </FilterTabs>
  </PageSection>
);

export { WorksPage };
