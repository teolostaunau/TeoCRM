import { ReactNode } from "react";
import { BrandPanel } from "@/components/branding/BrandPanel";
import { Logo } from "@/components/branding/Logo";
import { Slogan } from "@/components/branding/Slogan";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-background">

      {/* Desktop */}
      <div className="hidden h-screen overflow-hidden lg:grid lg:grid-cols-[1.3fr_0.7fr] xl:grid-cols-[1.35fr_0.65fr]">

        <aside className="h-full">
          <BrandPanel />
        </aside>

        <main className="flex items-center justify-center px-10 py-6">
          <div className="w-full max-w-md">
            {children}
          </div>
        </main>

      </div>

      {/* Mobile & Tablet */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10 lg:hidden">

        <div className="mb-10 flex flex-col items-center text-center">

          <Logo size="lg" />

          <div className="mt-6">
            <Slogan />
          </div>

        </div>

        <div className="w-full max-w-md">
          {children}
        </div>

      </div>

    </div>
  );
}