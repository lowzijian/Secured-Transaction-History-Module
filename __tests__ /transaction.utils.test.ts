import {
  formatTransactionAmount,
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
