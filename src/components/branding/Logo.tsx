/**
 * @deprecated
 * Será eliminado cuando finalice la migración
 * al Design System.
 */
import { BrandLogo } from "./BrandLogo";

export interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const widths = {
  sm: 120,
  md: 180,
  lg: 240,
  xl: 320,
} as const;

export function Logo({
  size = "md",
  className,
}: LogoProps) {
  return (
    <BrandLogo
      width={widths[size]}
      className={className}
      priority
    />
  );
}