import Body from "@/components/Body";
import Icon from "@/components/Icon";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TRANSACTION_TYPE } from "@/constants/transaction";
import { TransactionType } from "@/models/transaction.model";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

interface TransactionCardTypeBadgeProps {
  type: TransactionType;
}

const TransactionCardTypeBadge: FC<TransactionCardTypeBadgeProps> = (props) => {
  const { type } = props;

  return (
    <View style={styles.badge}>
      <Icon
        name={
          type === TRANSACTION_TYPE.CREDIT
            ? "credit-card-outline"
            : "wallet-outline"
        }
        size={16}
        color={COLORS["content-neutral"]}
      />
      <Body style={styles.text}>{type.toUpperCase()}</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: SPACING.S_1,
    paddingVertical: SPACING.S_0,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
    backgroundColor: COLORS["background-secondary"],
  },
  text: {
    fontSize: 12,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});

export default TransactionCardTypeBadge;
