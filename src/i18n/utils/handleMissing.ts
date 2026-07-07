// src/i18n/utils/handleMissing.ts

export function handleMissing(key: string): string {
  return process.env.NODE_ENV === "development"
    ? `⚠ ${key}`
    : key;
}