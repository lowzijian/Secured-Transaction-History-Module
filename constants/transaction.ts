export const TRANSACTION_TYPE = {
  DEBIT: "debit",
  CREDIT: "credit",
} as const;

export const TRANSACTION_CATEGORY = {
  GROCERIES: "groceries",
  UTILITIES: "utilities",
  FOOD: "food",
  SHOPPING: "shopping",
  TRANSPORTATION: "transportation",
  HEALTH: "health",
  EDUCATION: "education",
  RENT: "rent",
  ENTERTAINMENT: "entertainment",
  SALARY: "salary",
  TRANSFER: "transfer",
  CASHBACK: "cashback",
  OTHER: "other",
} as const;

export const TRANSACTION_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;
