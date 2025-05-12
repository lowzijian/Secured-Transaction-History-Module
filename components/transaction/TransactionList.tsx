import { COLORS, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  isAmountMasked: boolean;
}

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions, isAmountMasked } = props;

  return (
    <View style={styles.container}>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          {...transaction}
          isAmountMasked={isAmountMasked}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_1,
    backgroundColor: COLORS["background-white"],
  },
});

export default TransactionList;
