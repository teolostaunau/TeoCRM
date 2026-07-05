import { semanticTypography } from "../tokens";
import { ReactNode } from "react";

export type TypographyVariant =
    keyof typeof semanticTypography;

export type TypographyColor =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled"
    | "inverse";

export interface TypographyProps {

    variant?: TypographyVariant;

    color?: TypographyColor;

    align?: "left" | "center" | "right" | "justify";

    weight?:
        | "regular"
        | "medium"
        | "semibold"
        | "bold";

    truncate?: boolean;

    children: ReactNode;

}    