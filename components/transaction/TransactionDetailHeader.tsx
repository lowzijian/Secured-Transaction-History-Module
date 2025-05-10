import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import {
  formatTransactionAmount,
  formatTransactionDate,
} from "@/utils/transaction.utils";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface TransactionDetailHeaderProps {
  amount: number;
  date: string;
}

const TransactionDetailHeader: FC<TransactionDetailHeaderProps> = (props) => {
  const { amount, date } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{formatTransactionAmount(amount)}</Text>
      <Text style={styles.caption}>{formatTransactionDate(date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.S_4,
  },
  header: {
    fontSize: 32,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  caption: {
    fontSize: 16,
    color: COLORS["content-secondary"],
  },
});

export default TransactionDetailHeader;
