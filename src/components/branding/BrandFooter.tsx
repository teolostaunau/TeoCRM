import { BRAND } from "@/constants/brand";

export function BrandFooter() {
  return (
    <div className="text-sm text-muted-foreground">
      <p>© 2026 {BRAND.company}</p>
      <p>{BRAND.companySlogan}</p>
    </div>
  );
}