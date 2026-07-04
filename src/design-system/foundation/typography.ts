// Font Family
export const fontFamily = {
  sans: [
    "Inter",
    "system-ui",
    "sans-serif",
  ] as const,
};

// Font Weight
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// Font Size
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
} as const;

// Line Height
export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.7,
} as const;

// Letter Spacing
export const letterSpacing = {
  tighter: -0.03,
  tight: -0.02,
  normal: 0,
  wide: 0.02,
} as const;

// Typography
export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  textStyles,
} as const;