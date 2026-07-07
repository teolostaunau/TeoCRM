// src/i18n/resolver.ts

import { localeRegistry } from "./registry";
import type { Language } from "./languages";
import type {
  TranslationParams,
  TranslationValue,
} from "./types";

import { getNestedValue } from "./utils/getNestedValue";
import { interpolate } from "./utils/interpolate";
import { handleMissing } from "./utils/handleMissing";

function resolveTranslation(
  language: Language,
  key: string,
): TranslationValue | undefined {
  return getNestedValue(
    localeRegistry[language],
    key,
  );
}

function isTranslationString(
  value: TranslationValue | undefined,
): value is string {
  return typeof value === "string";
}

export function translate(
  language: Language,
  fallbackLanguage: Language,
  key: string,
  params?: TranslationParams,
): string {
  const translation = resolveTranslation(
    language,
    key,
  );

  if (isTranslationString(translation)) {
    return interpolate(
      translation,
      params,
    );
  }

  const fallback = resolveTranslation(
    fallbackLanguage,
    key,
  );

  if (isTranslationString(fallback)) {
    return interpolate(
      fallback,
      params,
    );
  }

  return handleMissing(key);
}