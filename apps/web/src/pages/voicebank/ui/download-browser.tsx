import type { ReactNode } from "react";

import type { DownloadFilter } from "#/pages/voicebank/model/download-state";
import { useDownloadFilter, useSetDownloadFilter } from "#/pages/voicebank/model/download-state";
import type { FilterTab } from "#/shared/ui";
import { FilterTabs } from "#/shared/ui";

import { DownloadGrid } from "./download-grid";

const TITLE = "DOWNLOAD";
const TABS: readonly FilterTab<DownloadFilter>[] = [
  { value: "all", label: "ALL" },
  { value: "talk", label: "TALK" },
  { value: "sing", label: "SING" },
  { value: "other", label: "OTHER" },
];
const TABS_LABEL = "Filter downloads by category";

const DownloadBrowser = (): ReactNode => {
  const filter = useDownloadFilter();
  const setFilter = useSetDownloadFilter();
  return (
    <FilterTabs
      title={TITLE}
      tone="title"
      label={TABS_LABEL}
      tabs={TABS}
      value={filter}
      onValueChange={setFilter}
    >
      <DownloadGrid />
    </FilterTabs>
  );
};

export { DownloadBrowser };
