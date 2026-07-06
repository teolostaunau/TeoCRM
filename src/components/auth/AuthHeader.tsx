import type { AuthHeaderProps } from "./types";

export function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <header className="mb-8 space-y-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm leading-6 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}