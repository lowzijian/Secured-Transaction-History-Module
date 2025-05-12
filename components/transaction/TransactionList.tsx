import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  isAmountMasked: boolean;
}

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions, isAmountMasked } = props;

  return transactions.map((transaction) => (
    <TransactionItem
      key={transaction.id}
      {...transaction}
      isAmountMasked={isAmountMasked}
    />
  ));
};

export default TransactionList;
