import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({
  size = 36,
  className,
}: LogoIconProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-blue-600 flex items-center justify-center shadow-md",
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <span className="text-white font-bold">
        T
      </span>
    </div>
  );
}