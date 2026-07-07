"use client";

import { ThemeProvider } from "@/hooks/use-theme";
import { ThemedToaster } from "@/components/themed-toaster";
import { I18nProvider } from "@/i18n/react";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
        <I18nProvider>
            {children}
            <ThemedToaster />
        </I18nProvider>
    </ThemeProvider>
  );
}