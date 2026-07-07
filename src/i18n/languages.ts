export const SUPPORTED_LANGUAGES = [
  "es",
  "en",
] as const;

export type Language =
    typeof SUPPORTED_LANGUAGES[number];