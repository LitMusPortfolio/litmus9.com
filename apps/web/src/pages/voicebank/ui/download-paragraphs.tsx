import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

const DownloadParagraphs = ({
  paragraphs,
}: Readonly<{ paragraphs: readonly string[] }>): ReactNode => (
  <Dialog.Description asChild>
    <div className="text-secondary-foreground flex flex-col gap-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </Dialog.Description>
);

export { DownloadParagraphs };
