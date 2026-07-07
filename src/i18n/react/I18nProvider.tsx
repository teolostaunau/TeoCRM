"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

import {
  resolveInitialLanguage,
  setStoredLanguage,
} from "@/i18n";

import type { Language } from "@/i18n";

import { I18nContext } from "./I18nContext";

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({
  children,
}: I18nProviderProps) {
  const [language, setLanguage] =
    useState<Language>(resolveInitialLanguage);

  useEffect(() => {
    setStoredLanguage(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}