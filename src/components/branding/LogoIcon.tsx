/**
 * @deprecated
 * Será eliminado cuando finalice la migración
 * al Design System.
 */
import { BrandIcon } from "./BrandIcon";

export interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({
  size = 40,
  className,
}: LogoIconProps) {
  return (
    <BrandIcon
      size={size}
      className={className}
      priority
    />
  );
}