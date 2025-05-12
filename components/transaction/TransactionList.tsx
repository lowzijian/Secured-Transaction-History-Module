import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import TransactionItem from "./TransactionItem";
import {
  formatTransactionAmount,
  groupedTransactionByMonth,
  maskTransactionAmount,
} from "@/utils/transaction.utils";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";

interface TransactionListProps {
  transactions: Transaction[];
  isAmountMasked: boolean;
}

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions, isAmountMasked } = props;

  const groupedTransaction = groupedTransactionByMonth(transactions);

  return Object.entries(groupedTransaction).map(
    ([month, { total, transactions }]) => {
      const totalAmountStyle: StyleProp<TextStyle> = {
        color: total > 0 ? COLORS["content-positive"] : COLORS["text-primary"],
      };

      return (
        <View key={month} style={styles.container}>
          <Text style={styles.label}>{month.toUpperCase()}</Text>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              {...transaction}
              isAmountMasked={isAmountMasked}
            />
          ))}
          <View style={styles.footer}>
            <Text style={styles.caption}>Total</Text>
            <Text style={totalAmountStyle}>
              {isAmountMasked
                ? maskTransactionAmount(total)
                : formatTransactionAmount(total)}
            </Text>
          </View>
        </View>
      );
    }
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.S_2,
  },
  label: {
    fontSize: 18,
    color: COLORS["content-secondary"],
  },
  footer: {
    flexDirection: "row",
    gap: SPACING.S_1,
    marginLeft: "auto",
  },
  caption: {
    color: COLORS["content-secondary"],
  },
});

export default TransactionList;
