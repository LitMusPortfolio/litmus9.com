import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

import { FramedImage } from "./framed-image";

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
  sm: "size-icon-sm",
  lg: "size-icon-lg",
};

const SocialLinks = ({ size }: Readonly<{ size: SocialLinkSize }>): ReactNode => (
  <div className="flex items-center gap-6">
    {SOCIAL_LINKS.map((link) => (
      <a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.platform}
        className={cn(
          "inline-block transition-transform duration-300 ease-in-out hover:scale-110",
          sizeClass[size],
        )}
      >
        <FramedImage src={link.icon} alt={link.platform} loading="eager" />
      </a>
    ))}
  </div>
);

export { SocialLinks };

export type { SocialLinkSize };
