import type { ReactNode } from "react";

import { ContactColumn } from "./contact-column";

const ContactNotices = (): ReactNode => (
  <div className="grid-cols-contact max-xl:grid-cols-single grid gap-8">
    <ContactColumn />
    <div className="flex" />
  </div>
);

export { ContactNotices };
