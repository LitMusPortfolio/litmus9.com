import { Dialog } from "radix-ui";
import type { ReactNode } from "react";

const DownloadParagraphs = ({
  paragraphs,
}: Readonly<{ paragraphs: readonly string[] }>): ReactNode => (
  <Dialog.Description asChild>
    <div>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-modal-gap text-foreground-soft">
          {paragraph}
        </p>
      ))}
    </div>
  </Dialog.Description>
);

export { DownloadParagraphs };
