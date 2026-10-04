import { useAtom } from "@effect/atom-react";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { emailVisibilityAtom } from "#/pages/contact/model/email";

const EMAIL_PARTS = ["6litmus9", "@", "gmail", ".", "com"] as const;
const REVEAL_LABEL = "クリックで表示";
const REVEAL_ARIA_LABEL = `メールアドレス ${REVEAL_LABEL}`;
const OPEN_BRACKET = "【";
const CLOSE_BRACKET = "】";

const ProtectedEmail = (): ReactNode => {
  const [visibility, setVisibility] = useAtom(emailVisibilityAtom);
  const reveal = useCallback(() => {
    setVisibility("revealed");
  }, [setVisibility]);
  if (visibility === "revealed") {
    return (
      <span className="inline-flex items-center gap-2">
        {OPEN_BRACKET}
        <span className="text-primary">
          {EMAIL_PARTS.map((part) => (
            <span key={part}>{part}</span>
          ))}
        </span>
        {CLOSE_BRACKET}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      {OPEN_BRACKET}
      <button
        type="button"
        aria-label={REVEAL_ARIA_LABEL}
        onClick={reveal}
        className="font-inherit hover:text-primary-light cursor-pointer border-none bg-transparent p-0 underline decoration-dotted underline-offset-2 transition-all duration-200 hover:decoration-solid"
      >
        {REVEAL_LABEL}
      </button>
      {CLOSE_BRACKET}
    </span>
  );
};

export { ProtectedEmail };
