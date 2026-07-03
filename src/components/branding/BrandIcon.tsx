import Image from "next/image";
import { cn } from "@/lib/utils";
import { BrandAssets } from "./BrandAssets";

export interface BrandIconProps {
  size?: number;
  priority?: boolean;
  className?: string;
}

export function BrandIcon({
  size = 48,
  priority = false,
  className,
}: BrandIconProps) {
  return (
    <Image
      src={BrandAssets.icon.primary}
      alt="TeoCRM"
      width={size}
      height={size}
      priority={priority}
      className={cn(
        "select-none object-contain",
        className
      )}
    />
  );
}