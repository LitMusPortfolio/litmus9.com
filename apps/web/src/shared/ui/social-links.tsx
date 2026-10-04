import type { ReactNode } from "react";

import { cn } from "#/shared/lib";

import { FramedImage } from "./framed-image";

type SocialLinkSize = "sm" | "lg";
type SocialAccount = "litmus" | "lit";

const ICONS = {
  twitter: "/001_top/icon_X.svg",
  youtube: "/001_top/icon_youtube.svg",
  niconico: "/001_top/icon_niconico.svg",
} as const;

const SOCIAL_LINKS: Readonly<
  Record<SocialAccount, readonly Readonly<{ platform: string; url: string; icon: string }>[]>
> = {
  litmus: [
    { platform: "X (Twitter)", url: "https://x.com/LitMus9_", icon: ICONS.twitter },
    { platform: "YouTube", url: "https://www.youtube.com/@LitMus9_", icon: ICONS.youtube },
    { platform: "niconico", url: "https://www.nicovideo.jp/user/116098698", icon: ICONS.niconico },
  ],
  lit: [
    { platform: "X (Twitter)", url: "https://x.com/LitXxx10_", icon: ICONS.twitter },
    { platform: "YouTube", url: "https://www.youtube.com/@Lit_Synth", icon: ICONS.youtube },
    { platform: "niconico", url: "https://www.nicovideo.jp/user/139498942", icon: ICONS.niconico },
  ],
};

const sizeClass: Readonly<Record<SocialLinkSize, string>> = {
  sm: "size-icon-sm",
  lg: "size-icon-lg",
};

const SocialLinks = ({
  size,
  account = "litmus",
}: Readonly<{ size: SocialLinkSize; account?: SocialAccount }>): ReactNode => (
  <div className="flex items-center gap-6">
    {SOCIAL_LINKS[account].map((link) => (
      <a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.platform}
        className={cn(
          "inline-block opacity-60 transition-all duration-300 ease-in-out motion-safe:hover:scale-130 hover:opacity-100",
          sizeClass[size],
        )}
      >
        <FramedImage src={link.icon} alt={link.platform} loading="eager" />
      </a>
    ))}
  </div>
);

export { SocialLinks };

export type { SocialAccount, SocialLinkSize };
