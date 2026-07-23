/**
 * Currency — single source of truth for deal-value formatting and
 * the currency picker options.
 *
 * Before this module, ~6 components each defined their own
 * `Intl.NumberFormat(..., { currency: "USD" })` helper with USD
 * baked in. The default currency is now configurable per account
 * (accounts.default_currency, migration 021), so every formatter
 * takes a currency and falls back to DEFAULT_CURRENCY only when
 * nothing is known.
 */

/** App-wide fallback when no account/deal currency is available. */
export const DEFAULT_CURRENCY = "USD";

export interface CurrencyOption {
  /** ISO-4217 code, e.g. "USD". Stored verbatim in the DB. */
  code: string;
  /** i18n key for the human label, e.g. "common.currencies.USD". */
  labelKey: string;
  /** Symbol for compact display, e.g. "$". */
  symbol: string;
}

/**
 * The currencies offered in pickers. Codes must be valid ISO-4217 so
 * `Intl.NumberFormat` renders the right symbol/grouping. Extend this
 * list to offer more — nothing else needs to change.
 */
export const CURRENCIES: CurrencyOption[] = [
  { code: "USD", labelKey: "common.currencies.USD", symbol: "$" },
  { code: "EUR", labelKey: "common.currencies.EUR", symbol: "€" },
  { code: "GBP", labelKey: "common.currencies.GBP", symbol: "£" },
  { code: "INR", labelKey: "common.currencies.INR", symbol: "₹" },
  { code: "AUD", labelKey: "common.currencies.AUD", symbol: "A$" },
  { code: "CAD", labelKey: "common.currencies.CAD", symbol: "C$" },
  { code: "BRL", labelKey: "common.currencies.BRL", symbol: "R$" },
  { code: "JPY", labelKey: "common.currencies.JPY", symbol: "¥" },
  { code: "CNY", labelKey: "common.currencies.CNY", symbol: "¥" },
  { code: "AED", labelKey: "common.currencies.AED", symbol: "د.إ" },
  { code: "ZAR", labelKey: "common.currencies.ZAR", symbol: "R" },
  { code: "NGN", labelKey: "common.currencies.NGN", symbol: "₦" },
  { code: "SGD", labelKey: "common.currencies.SGD", symbol: "S$" },
  { code: "MXN", labelKey: "common.currencies.MXN", symbol: "$" },
  { code: "PEN", labelKey: "common.currencies.PEN", symbol: "S/." },
];

/**
 * Format a deal value as a currency string. Whole-number output
 * (no minor units) — deal values are tracked to the dollar across
 * the app. `currency` defaults to USD so callers with nothing better
 * stay safe, but pass the account/deal currency wherever known.
 *
 * Total by design: `Intl.NumberFormat` throws a RangeError on a
 * structurally invalid currency code, and `deals.currency` carries
 * NO DB CHECK (only `accounts.default_currency` does), so legacy
 * rows, imports, or hand-edited data can hold malformed values like
 * "United States". We never let that crash a render — on a bad code
 * we fall back to "CODE 1,234".
 */
export function formatCurrency(
  value: number,
  currency: string = DEFAULT_CURRENCY,
): string {
  const code = (currency || DEFAULT_CURRENCY).trim();
  const amount = Number(value) || 0;
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    // Invalid ISO code — show the raw code + grouped number so the
    // value is still legible instead of throwing.
    return `${code} ${new Intl.NumberFormat(undefined, {
      maximumFractionDigits: 0,
    }).format(amount)}`;
  }
}

/**
 * Compact currency for tight spaces (donut center, legend rows):
 * "$1.2M" / "€34.5k" / "₹900". Uses the currency's symbol from
 * CURRENCIES, falling back to the code when we don't carry a symbol.
 */
export function formatCurrencyShort(
  value: number,
  currency: string = DEFAULT_CURRENCY,
): string {
  const code = currency || DEFAULT_CURRENCY;
  const symbol = CURRENCIES.find((c) => c.code === code)?.symbol ?? `${code} `;
  const v = Number(value || 0);
  if (v >= 1_000_000) return `${symbol}${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${symbol}${(v / 1_000).toFixed(1)}k`;
  return `${symbol}${v.toFixed(0)}`;
}
