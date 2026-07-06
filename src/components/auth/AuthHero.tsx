import type { AuthHeroProps } from "./types";

export function AuthHero({ title, subtitle }: AuthHeroProps) {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}