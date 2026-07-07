// src/i18n/utils/getNestedValue.ts

import type {
  TranslationDictionary,
  TranslationValue,
} from "../types";

export function getNestedValue(
  dictionary: TranslationDictionary,
  key: string,
): TranslationValue | undefined {
  if (!key) {
    return undefined;
  }

  const segments = key.split(".");

  let current: TranslationValue = dictionary;

  for (const segment of segments) {
    if (
      typeof current !== "object" ||
      current === null ||
      !(segment in current)
    ) {
      return undefined;
    }

    current = current[segment];
  }

  return current;
}