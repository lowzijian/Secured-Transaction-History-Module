import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import {
  maskTransactionAmount,
  formatTransactionDate,
} from "@/utils/transaction.utils";
import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const TransactionItem: FC<Transaction> = (props) => {
  const { amount, date, description, type } = props;

  const amountStyle: StyleProp<TextStyle> = [
    styles.amount,
    {
      color:
        amount > 0 ? COLORS["content-positive"] : COLORS["content-negative"],
    },
  ];

  const iconStyle: StyleProp<ViewStyle> = [
    styles.icon,
    {
      backgroundColor:
        amount > 0 ? COLORS["background-positive"] : COLORS["background-negative"],
    },
  ];

  return (
    <TouchableOpacity style={styles.container}>
      <View style={iconStyle} />
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text>{formatTransactionDate(date)}</Text>
        <Text style={styles.type}>{type.toUpperCase()}</Text>
      </View>
      <Text style={amountStyle}>{maskTransactionAmount(amount)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_2,
    flexDirection: "row",
    gap: SPACING.S_2,
  },
  content: {
    flexGrow: 1,
  },
  description: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 16,
  },
  type: {
    fontSize: 14,
    color: COLORS["content-secondary"],
  },
  amount: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'center'
  },
});

export default TransactionItem;
