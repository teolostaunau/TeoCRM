import { Card, CardContent } from "@/components/ui/card";
import type { AuthCardProps } from "./types";

export function AuthCard({ children }: AuthCardProps) {
  return (
    <Card
      className="
        w-full
        max-w-md
        border-border
        bg-card
        shadow-xl
        rounded-2xl
      "
    >
      <CardContent className="p-8 sm:p-10">
        {children}
      </CardContent>
    </Card>
  );
}