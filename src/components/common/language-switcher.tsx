"use client";

import { useTranslation } from "@/i18n/react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={
          language === "es"
            ? "font-semibold underline"
            : "text-muted-foreground"
        }
      >
        ES
      </button>

      <span>|</span>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={
          language === "en"
            ? "font-semibold underline"
            : "text-muted-foreground"
        }
      >
        EN
      </button>
    </div>
  );
}