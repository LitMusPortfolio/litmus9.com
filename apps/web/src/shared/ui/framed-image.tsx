import type { ReactNode } from "react";

type ImageLoading = "eager" | "lazy";
type FramedImageVariant =
  | "plain"
  | "portrait"
  | "figure"
  | "anchored-figure"
  | "logo"
  | "cover"
  | "fill";

const variantClass: Readonly<
  Record<FramedImageVariant, Readonly<{ frame: string; image: string }>>
> = {
  plain: { frame: "relative overflow-hidden", image: "" },
  portrait: { frame: "relative overflow-hidden", image: "block h-auto w-portrait" },
  figure: {
    frame: "relative h-full w-auto overflow-hidden max-xl:h-auto max-xl:w-full",
    image: "h-full w-auto object-contain drop-shadow-glow max-xl:h-auto max-xl:w-full",
  },
  "anchored-figure": {
    frame: "relative h-full w-auto overflow-hidden",
    image: "h-full w-auto object-contain object-left-bottom drop-shadow-glow-lg",
  },
  logo: {
    frame: "relative mb-8 w-1/2",
    image: "h-auto w-auto max-h-hero-logo max-w-full",
  },
  cover: { frame: "relative overflow-hidden", image: "size-full object-cover" },
  fill: {
    frame: "absolute top-0 left-0 size-full overflow-hidden",
    image: "size-full object-cover",
  },
};

const FramedImage = ({
  src,
  alt,
  variant = "plain",
  loading = "lazy",
}: Readonly<{
  src: string;
  alt: string;
  variant?: FramedImageVariant;
  loading?: ImageLoading;
}>): ReactNode => (
  <div className={variantClass[variant].frame}>
    <img src={src} alt={alt} loading={loading} className={variantClass[variant].image} />
  </div>
);

export type { FramedImageVariant, ImageLoading };
export { FramedImage };
