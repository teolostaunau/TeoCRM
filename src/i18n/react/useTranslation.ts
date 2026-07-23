"use client";

import { useCallback, useContext } from "react";

import { translate } from "@/i18n";
import type { TranslationParams } from "@/i18n";

import { I18nContext } from "./I18nContext";

export function useTranslation() {
  const { language, setLanguage } = useContext(I18nContext);

  const t = useCallback(
    function t(key: string, params?: TranslationParams): string {
      return translate(language, key, params);
    },
    [language]
  );

  return {
    language,
    setLanguage,
    t,
  };
}