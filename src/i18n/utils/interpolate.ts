// src/i18n/utils/interpolate.ts

import type { TranslationParams } from "../types";

const PARAM_REGEX = /\{\{(\w+)\}\}/g;

export function interpolate(
  template: string,
  params?: TranslationParams,
): string {
  if (!params) {
    return template;
  }

  return template.replace(
    PARAM_REGEX,
    (_, key: string) => params[key]?.toString() ?? `{{${key}}}`,
  );
}