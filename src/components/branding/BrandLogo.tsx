import Image from "next/image";
import { cn } from "@/lib/utils";
import { BrandAssets } from "./BrandAssets";

export interface BrandLogoProps {
  variant?: "horizontal" | "vertical";
  width?: number;
  priority?: boolean;
  className?: string;
}

const ASPECT_RATIO = {
  horizontal: 3.4,
  vertical: 1,
} as const;

export function BrandLogo({
  variant = "horizontal",
  width = 260,
  priority = false,
  className,
}: BrandLogoProps) {
  // const src = BrandAssets.logo[variant].primary;
  const src = BrandAssets.logo[variant].fallback;
  const height = Math.round(width / ASPECT_RATIO[variant]);

  return (
    <Image
      src={src}
      alt="TeoCRM"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "select-none object-contain w-auto h-auto",
        className
      )}
    />
  );
}