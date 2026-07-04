import { typography } from "../foundation";

// Semantic Typography
export const semanticTypography = {
  pageTitle: typography.textStyles.displayLg,
  sectionTitle: typography.textStyles.headingLg,
  cardTitle: typography.textStyles.headingMd,
  body: typography.textStyles.bodyMd,
  helper: typography.textStyles.bodySm,
  label: typography.textStyles.bodySm,
  button: typography.textStyles.bodyMd,
  caption: typography.textStyles.caption,
} as const;

export const typographyTokens = {
  semantic: semanticTypography,
} as const;