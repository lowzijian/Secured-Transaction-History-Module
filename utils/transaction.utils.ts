import { DATE_FORMAT } from "./date.util";
import { format } from "date-fns";
import { ValueOf } from "./types";
import { Transaction } from "@/models/transaction.model";

/**
 * Formats a transaction amount into a localized currency string.
 *
 * @param amount - the numeric amount to be formatted
 * @returns A formatted MYR currency string with plus sign if positive (e.g., "+RM1,234.56")
 *
 * @example
 * formatTransactionAmount(1234.56);
 * // Returns: "+RM1,234.56"
 */
export const formatTransactionAmount = (amount: number): string => {
  const locale: Intl.LocalesArgument = "ms-MY";
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formattedAmount = new Intl.NumberFormat(locale, options)
    .format(Math.abs(amount))
    .replace(/\s+/, "");

  const sign = amount > 0 ? "+" : "";

  return `${sign}${formattedAmount}`;
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
 * formatTransactionDate("2024-01-01T00:00:00Z");
 * // Returns: "Jan 01, 2024"
 */
export const formatTransactionDate = (
  date: string,
  _format: ValueOf<
    typeof DATE_FORMAT
  > = DATE_FORMAT.SHORT_MONTH_DAY_YEAR_WITH_COMMA
): string => {
  return format(new Date(date), _format);
};

/**
 * Groups transactions by month and calculates the total amount for each month.
 *
 * @param transactions - an array of transaction objects
 * @returns An object where each key is a month and the value is an object containing the total amount and an array of transactions for that month
 *
 * @example
 * groupedTransactionByMonth([
 *   { id: 1, date: "2024-01-01T00:00:00Z", amount: 100 },
 *   { id: 2, date: "2024-01-15T00:00:00Z", amount: 200 },
 *   { id: 3, date: "2024-02-01T00:00:00Z", amount: 300 },
 * ]);
 * // Returns:
 * // {
 * //   "January 2024": {
 * //     total: 300,
 * //     transactions: [
 * //       { id: 1, date: "2024-01-01T00:00:00Z", amount: 100 },
 * //       { id: 2, date: "2024-01-15T00:00:00", amount: 200 }
 * //     ]
 * //   },
 * //   "February 2024": {
 * //     total: 300,
 * //     transactions: [
 * //       { id: 3, date: "2024-02-01T00:00:00Z", amount: 300 }
 * //     ]
 * //   }
 * // }
 */
export const groupedTransactionByMonth = (transactions: Transaction[]) => {
  return transactions
    .map((txn) => ({
      ...txn,
      month: formatTransactionDate(txn.date, DATE_FORMAT.MONTH_YEAR),
    }))
    .reduce(
      (acc, txn) => {
        const { month, ...rest } = txn;

        return {
          ...acc,
          [month]: {
            total: (acc[month]?.total || 0) + txn.amount,
            transactions: [...(acc[month]?.transactions || []), rest],
          },
        };
      },
      {} as Record<
        string,
        {
          total: number;
          transactions: Transaction[];
        }
      >
    );
};
