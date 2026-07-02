import { BRAND } from "@/constants/brand";

export function Slogan() {
  return (
    <div className="space-y-1">
      {BRAND.slogan.split(". ").map((line) => (
        <h2
          key={line}
          className="text-3xl font-semibold tracking-tight"
        >
          {line.replace(".", "")}.
        </h2>
      ))}
    </div>
  );
}