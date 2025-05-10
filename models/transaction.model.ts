import { TRANSACTION_TYPE } from "@/constants/transaction";
import { ValueOf } from "@/utils/types";

export type TransactionType = ValueOf<typeof TRANSACTION_TYPE>;

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: TransactionType;
}
