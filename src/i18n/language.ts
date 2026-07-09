import { DEFAULT_LANGUAGE } from "./config";
import { getStoredLanguage, setStoredLanguage } from "./storage";
import type { Language } from "./languages";

export const LanguageService = {
  get(): Language {
    return getStoredLanguage() ?? DEFAULT_LANGUAGE;
  },

  set(language: Language): void {
    setStoredLanguage(language);
  },

  clear(): void {
    setStoredLanguage(DEFAULT_LANGUAGE);
  },
};