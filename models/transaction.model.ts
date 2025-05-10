import { TRANSACTION_TYPE } from "@/constants/transaction";
import { ValueOf } from "@/utils/types";

export interface Transaction {
    id: string;
    amount: number;
    date: string;
    description: string;
    type: ValueOf<typeof TRANSACTION_TYPE>;
}