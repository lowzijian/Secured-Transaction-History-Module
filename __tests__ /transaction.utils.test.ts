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
  const mockTransaction2022Jan1 = {
    date: "2022-01-01T00:00:00Z",
    amount: -1,
  } as Transaction;
  const mockTransaction2022Jan2 = {
    date: "2022-01-02T00:00:00Z",
    amount: -2,
  } as Transaction;
  const mockTransaction2022Feb = {
    date: "2022-02-01T00:00:00Z",
    amount: -3,
  } as Transaction;
  const mockTransaction2022Jun = {
    date: "2022-06-01T00:00:00Z",
    amount: -4,
  } as Transaction;
  const mockTransaction2023Jan = {
    date: "2023-01-01T00:00:00Z",
    amount: -5,
  } as Transaction;
  const mockTransaction2024Jan = {
    date: "2024-01-01T00:00:00Z",
    amount: -6,
  } as Transaction;

  test("empty transactions", () => {
    const transactions: Transaction[] = [];
    const result = groupedTransactionByMonth(transactions);
    expect(result).toEqual([]);
  });

  it("transactions within the same month", () => {
    const result = groupedTransactionByMonth([
      mockTransaction2022Jan2,
      mockTransaction2022Jan1,
    ]);
    const expectedResult: ReturnType<typeof groupedTransactionByMonth> = [
      {
        title: "January 2022",
        data: [mockTransaction2022Jan2, mockTransaction2022Jan1],
        total: -3,
      },
    ];
    expect(result).toEqual(expectedResult);
  });

  test("transactions spanning various months but occurring within the same year", () => {
    const result = groupedTransactionByMonth([
      mockTransaction2022Jun,
      mockTransaction2022Feb,
      mockTransaction2022Jan2,
    ]);
    const expectedResult: ReturnType<typeof groupedTransactionByMonth> = [
      {
        title: "June 2022",
        data: [mockTransaction2022Jun],
        total: -4,
      },
      {
        title: "February 2022",
        data: [mockTransaction2022Feb],
        total: -3,
      },
      {
        title: "January 2022",
        data: [mockTransaction2022Jan2],
        total: -2,
      },
    ];
    expect(result).toEqual(expectedResult);
  });

  test("transactions occur in different years", () => {
    const result = groupedTransactionByMonth([
      mockTransaction2024Jan,
      mockTransaction2023Jan,
      mockTransaction2022Jan1,
    ]);

    const expectedResult: ReturnType<typeof groupedTransactionByMonth> = [
      {
        title: "January 2024",
        data: [mockTransaction2024Jan],
        total: -6,
      },
      {
        title: "January 2023",
        data: [mockTransaction2023Jan],
        total: -5,
      },
      {
        title: "January 2022",
        data: [mockTransaction2022Jan1],
        total: -1,
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
