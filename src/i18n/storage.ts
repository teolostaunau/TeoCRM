import { DEFAULT_LANGUAGE } from "./config";
import type { Language } from "./languages";

const STORAGE_KEY = "teo.language";

export function getStoredLanguage(): Language | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(STORAGE_KEY);

  return value as Language | null;
}

export function setStoredLanguage(language: Language): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, language);
}

export function clearStoredLanguage(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

export function resolveInitialLanguage(): Language {
  return getStoredLanguage() ?? DEFAULT_LANGUAGE;
}