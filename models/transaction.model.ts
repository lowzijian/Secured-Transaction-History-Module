import {
  TRANSACTION_CATEGORY,
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
} from "@/constants/transaction";
import { ValueOf } from "@/utils/types";

export type TransactionType = ValueOf<typeof TRANSACTION_TYPE>;
export type TransactionCategory = ValueOf<typeof TRANSACTION_CATEGORY>;
export type TransactionStatus = ValueOf<typeof TRANSACTION_STATUS>;

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: TransactionType;
  category: TransactionCategory;
  status: TransactionStatus;
  merchant: string;
  merchantLogo?: string;
  accountName: string;
  accountNumber: string;
  referenceId: string;
}
