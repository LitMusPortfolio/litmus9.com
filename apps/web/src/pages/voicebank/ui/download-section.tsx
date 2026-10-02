import type { ReactNode } from "react";

import { Container } from "#/shared/ui";

import { DownloadBrowser } from "./download-browser";
import { DownloadDialog } from "./download-dialog";

const DownloadSection = (): ReactNode => (
  <section id="downloads" className="min-h-screen py-16">
    <Container>
      <DownloadBrowser />
    </Container>
    <DownloadDialog />
  </section>
);

export { DownloadSection };
