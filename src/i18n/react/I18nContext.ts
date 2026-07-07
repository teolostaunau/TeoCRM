"use client";

import { createContext } from "react";

import { DEFAULT_LANGUAGE } from "@/i18n";
import type { Language } from "@/i18n";

export interface I18nContextState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const I18nContext = createContext<I18nContextState>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {
    throw new Error(
      "I18nContext is not available. Wrap your application with I18nProvider."
    );
  },
});