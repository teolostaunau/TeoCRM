import type { TranslationDictionary } from "./types";
import type { Language } from "./languages";

import { en, es } from "./locales";

export const localeRegistry: Record<Language, TranslationDictionary> = {
  es,
  en,
};