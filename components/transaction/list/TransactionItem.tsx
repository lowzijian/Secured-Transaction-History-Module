import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import {
  formatTransactionAmount,
  formatTransactionDate,
  maskTransactionAmount,
} from "@/utils/transaction.utils";
import { Link } from "expo-router";
import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import TransactionCategoryIcon from "../TransactionCategoryIcon";
import { DATE_FORMAT } from "@/utils/date.util";
import Icon from "@/components/Icon";
import { TRANSACTION_TYPE } from "@/constants/transaction";
import Body from "@/components/Body";

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
        <TransactionCategoryIcon category={category} />
        <View style={styles.content}>
          <Body style={styles.description}>{description}</Body>
          <View style={styles.detailRow}>
            <Icon
              name={"calendar-outline"}
              size={14}
              color={COLORS["content-secondary"]}
            />
            <Body style={styles.caption}>
              {formatTransactionDate(date, DATE_FORMAT.SHORT_MONTH_DAY)}
            </Body>
            <Body style={styles.caption}>•</Body>
            <Icon
              name={
                type === TRANSACTION_TYPE.CREDIT
                  ? "credit-card-outline"
                  : "wallet-outline"
              }
              size={14}
              color={COLORS["content-secondary"]}
            />
            <Body style={styles.caption}>{type.toUpperCase()}</Body>
          </View>
        </View>
        <Body style={amountStyle}>
          {isAmountMasked
            ? maskTransactionAmount(amount)
            : formatTransactionAmount(amount)}
        </Body>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: SPACING.S_2,
    paddingVertical: SPACING.S_2,
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
  },
  description: {
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 14,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_0,
    paddingTop: SPACING.S_0,
  },
  caption: {
    fontSize: 12,
    color: COLORS["content-secondary"],
  },
  amount: {
    fontSize: 14,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});

export default TransactionItem;
