import type { ReactNode } from "react";

import type { DownloadFilter } from "#/pages/voicebank/model/download-state";
import { downloadFilterAtom } from "#/pages/voicebank/model/download-state";
import type { FilterTab } from "#/shared/ui";
import { FilterTabs, SectionTitle } from "#/shared/ui";

import { DownloadGrid } from "./download-grid";

const TITLE = "DOWNLOAD";
const TABS: readonly FilterTab<DownloadFilter>[] = [
  { value: "all", label: "ALL" },
  { value: "talk", label: "TALK" },
  { value: "sing", label: "SING" },
  { value: "other", label: "OTHER" },
];
const TABS_LABEL = "Filter downloads by category";

const DownloadBrowser = (): ReactNode => (
  <>
    <SectionTitle tone="title">{TITLE}</SectionTitle>
    <FilterTabs label={TABS_LABEL} tabs={TABS} atom={downloadFilterAtom}>
      <DownloadGrid />
    </FilterTabs>
  </>
);

export { DownloadBrowser };
