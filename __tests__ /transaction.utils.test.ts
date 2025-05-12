import { Transaction } from "@/models/transaction.model";
import {
  formatTransactionAmount,
  groupedTransactionByMonth,
  maskTransactionAmount,
} from "@/utils/transaction.utils";

// formatTransactionAmount
describe("formatTransactionAmount", () => {
  test.each<[string, number, string]>([
    ["format number to MYR currency with plus sign", 1234.56, "+RM1,234.56"],
    [
      "format number to MYR currency with thousands separator, plus sign",
      1000000,
      "+RM1,000,000.00",
    ],
    [
      "format negative number to MYR currency without plus sign",
      -1234.56,
      "RM1,234.56",
    ],
    ["format zero to MYR currency without plus sign", 0, "RM0.00"],
  ])("%s", (_, amount, expected) => {
    expect(formatTransactionAmount(amount)).toBe(expected);
  });
});

// maskTransactionAmount
describe("maskTransactionAmount", () => {
  test.each<[string, number, string]>([
    ["mask number to MYR currency with plus sign", 1234.56, "+RM*,***.**"],
    [
      "mask number to MYR currency with thousands separator, plus sign",
      1000000,
      "+RM*,***,***.**",
    ],
    [
      "mask negative number to MYR currency  without plus sign",
      -1234.56,
      "RM*,***.**",
    ],
    ["mask zero to MYR currency without plus sign", 0, "RM*.**"],
  ])("%s", (_, amount, expected) => {
    expect(maskTransactionAmount(amount)).toBe(expected);
  });
});

// groupedTransactionByMonth
describe("groupedTransactionByMonth", () => {
  it("groups transactions by month with correct totals", () => {
    const mockTransactions = [
      {
        id: "1",
        amount: -100,
        date: "2025-05-01T10:00:00Z",
      },
      {
        id: "2",
        amount: -200,
        date: "2025-05-12T15:00:00Z",
      },
      {
        id: "3",
        amount: 1000,
        date: "2025-04-15T08:00:00Z",
      },
    ] as Transaction[];

    const expectedResult = {
      "May 2025": {
        total: -300,
        transactions: [
          {
            id: "1",
            amount: -100,
            date: "2025-05-01T10:00:00Z",
          },
          {
            id: "2",
            amount: -200,
            date: "2025-05-12T15:00:00Z",
          },
        ],
      },
      "April 2025": {
        total: 1000,
        transactions: [
          {
            id: "3",
            amount: 1000,
            date: "2025-04-15T08:00:00Z",
          },
        ],
      },
    };

    const result = groupedTransactionByMonth(mockTransactions as any);

    expect(result).toEqual(expectedResult);
  });

  it("returns empty object when input is empty", () => {
    expect(groupedTransactionByMonth([])).toEqual({});
  });
});
