import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import {
  maskTransactionAmount,
  formatTransactionDate,
  formatTransactionAmount,
} from "@/utils/transaction.utils";
import { Link } from "expo-router";
import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import TransactionItemIcon from "./TransactionItemIcon";

interface TransactionItemProps extends Transaction {
  isAmountMasked?: boolean;
}

const TransactionItem: FC<TransactionItemProps> = (props) => {
  const { id, amount, date, description, type, isAmountMasked, category } =
    props;

  const amountStyle: StyleProp<TextStyle> = [
    styles.amount,
    {
      color: amount > 0 ? COLORS["content-positive"] : COLORS["text-primary"],
    },
  ];

  return (
    <Link
      href={{
        pathname: "/(transaction)/[id]",
        params: {
          id,
        },
      }}
      push
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <TransactionItemIcon category={category} />
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.caption}>
            {formatTransactionDate(date)} | {type.toUpperCase()}
          </Text>
        </View>
        <Text style={amountStyle}>
          {isAmountMasked
            ? maskTransactionAmount(amount)
            : formatTransactionAmount(amount)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: SPACING.S_2,
    paddingVertical: SPACING.S_2,
  },
  content: {
    flexGrow: 1,
  },
  description: {
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: COLORS["content-secondary"],
  },
  amount: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
});

export default TransactionItem;
