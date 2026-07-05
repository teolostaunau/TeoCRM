export const brandColors = {
  navy: "#081B3A",

  blue: "#0E66F5",

  cyan: "#00B5E8",

  amber: "#FF9800",

  white: "#FFFFFF",

  black: "#000000",
} as const

export type BrandColor = keyof typeof brandColors