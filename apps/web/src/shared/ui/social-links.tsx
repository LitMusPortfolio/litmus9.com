import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

type SocialLinkSize = "sm" | "lg";

const SOCIAL_LINKS = [
  { platform: "X (Twitter)", url: "https://x.com/litmus9_", icon: "/001_top/icon_X.svg" },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@LitMus9_",
    icon: "/001_top/icon_youtube.svg",
  },
  {
    platform: "niconico",
    url: "https://www.nicovideo.jp/user/116098698",
    icon: "/001_top/icon_niconico.svg",
  },
] as const;

const sizeClass: Readonly<Record<SocialLinkSize, string>> = {
  sm: "size-6",
  lg: "size-10",
};

const SocialLinks = ({ size }: Readonly<{ size: SocialLinkSize }>): ReactNode => (
  <div className="flex items-center gap-6">
    {SOCIAL_LINKS.map((link) => (
      <a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-block transition-transform hover:scale-110", sizeClass[size])}
      >
        <img src={link.icon} alt={link.platform} className="size-full" />
      </a>
    ))}
  </div>
);

export { SocialLinks };

export type { SocialLinkSize };
