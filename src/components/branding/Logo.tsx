import { cn } from "@/lib/utils";
import { LogoIcon } from "./LogoIcon";
import { BRAND } from "@/constants/brand";

export interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "icon";
  className?: string;
}

const sizes = {
  sm: 24,
  md: 36,
  lg: 48,
  xl: 64,
} as const;

export function Logo({
  size = "md",
  variant = "default",
  className,
}: LogoProps) {
  const iconSize = sizes[size];

  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-label={BRAND.product}
    >
      <LogoIcon size={iconSize} />

      {variant === "default" && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight">
            {BRAND.product}
          </span>

          <span className="text-xs text-muted-foreground">
            {BRAND.slogan}
          </span>
        </div>
      )}
    </div>
  );
}