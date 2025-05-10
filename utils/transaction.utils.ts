/**
 * Formats a transaction amount into a localized currency string.
 *
 * @param amount - the numeric amount to be formatted
 * @returns A formatted string in Malaysian Ringgit (e.g., "RM1,234.56")
 *
 * @example
 * formatTransactionAmount(1234.56);
 * // Returns: "RM1,234.56"
 */
export const formatTransactionAmount = (amount: number): string => {
  const locale: Intl.LocalesArgument = "ms-MY";
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat(locale, options)
    .format(amount)
    .replace(/\s+/, "");
};

/**
 * Masks the digits of a transaction amount, leaving only the currency symbol and decimal separator visible.
 *
 * @param amount - the numeric amount to be masked
 * @returns A masked string (e.g., "RM**.**")
 *
 * @example
 * maskTransactionAmount(1234.56);
 * // Returns: "RM**.**"
 */
export const maskTransactionAmount = (amount: number): string => {
  return formatTransactionAmount(amount).replace(/\d/g, "*");
};

/**
 * Formats a transaction date into a localized string.
 *
 * @param date - the date string to be formatted
 * @returns A formatted date string (e.g., "01 Jan 2023")
 *
 * @example
 * formatTransactionDate("2024-11-15T00:00:00Z");
 * // Returns: "01 Jan 2023"
 */
export const formatTransactionDate = (date: string): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return new Intl.DateTimeFormat("ms-MY", options).format(dateObj);
};
