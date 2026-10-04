import type { ReactNode } from "react";

import { Container } from "#/shared/ui";

import { DownloadBrowser } from "./download-browser";

const DownloadSection = (): ReactNode => (
  <section id="downloads" className="relative min-h-screen bg-cover bg-fixed bg-center py-16">
    <Container>
      <DownloadBrowser />
    </Container>
  </section>
);

export { DownloadSection };
