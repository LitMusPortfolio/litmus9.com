import { useAtom } from "@effect/atom-react";
import { useCallback } from "react";
import type { ReactNode } from "react";

import { emailVisibilityAtom } from "#/pages/contact/model/email";

const LOCAL_PART = "6litmus9";
const DOMAIN = "gmail.com";
const REVEAL_LABEL = "クリックで表示";
const REVEAL_ARIA_LABEL = `メールアドレス ${REVEAL_LABEL}`;
const AT = "@";
const OPEN_BRACKET = "【 ";
const CLOSE_BRACKET = " 】";

const ProtectedEmail = (): ReactNode => {
  const [visibility, setVisibility] = useAtom(emailVisibilityAtom);
  const reveal = useCallback(() => {
    setVisibility("revealed");
  }, [setVisibility]);
  if (visibility === "revealed") {
    return (
      <span>
        {OPEN_BRACKET}
        <span className="text-primary">
          {LOCAL_PART}
          {AT}
          {DOMAIN}
        </span>
        {CLOSE_BRACKET}
      </span>
    );
  }
  return (
    <span>
      {OPEN_BRACKET}
      <button
        type="button"
        aria-label={REVEAL_ARIA_LABEL}
        onClick={reveal}
        className="text-primary hover:text-accent cursor-pointer underline decoration-dotted underline-offset-2 transition-colors hover:decoration-solid"
      >
        {REVEAL_LABEL}
      </button>
      {CLOSE_BRACKET}
    </span>
  );
};

export { ProtectedEmail };
