import { SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions } = props;

  return (
    <View style={styles.container}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} {...transaction} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_1,
  },
});

export default TransactionList;
