import Body from "@/components/Body";
import Icon from "@/components/Icon";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TRANSACTION_STATUS } from "@/constants/transaction";
import { TransactionStatus } from "@/models/transaction.model";
import { ComponentProps, FC } from "react";
import { StyleSheet, View } from "react-native";

interface TransactionStatusBadgeProps {
  status: TransactionStatus;
}

const TransactionStatusBadge: FC<TransactionStatusBadgeProps> = (props) => {
  const { status } = props;

  const statusLabelStyle: Record<
    TransactionStatus,
    {
      backgroundColor: string;
      color: string;
      icon: ComponentProps<typeof Icon>["name"];
    }
  > = {
    [TRANSACTION_STATUS.COMPLETED]: {
      backgroundColor: COLORS["background-positive"],
      color: COLORS["content-positive"],
      icon: "check-circle-outline",
    },
    [TRANSACTION_STATUS.PENDING]: {
      backgroundColor: COLORS["background-warning"],
      color: COLORS["content-warning"],
      icon: "clock-outline",
    },
    [TRANSACTION_STATUS.FAILED]: {
      backgroundColor: COLORS["background-negative"],
      color: COLORS["content-negative"],
      icon: "close-circle-outline",
    },
  };

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: statusLabelStyle[status].backgroundColor,
        },
      ]}
    >
      <Icon
        name={statusLabelStyle[status].icon}
        size={16}
        color={statusLabelStyle[status].color}
      />
      <Body style={[styles.text, { color: statusLabelStyle[status].color }]}>
        {status.toUpperCase()}
      </Body>
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
  },
  text: {
    fontSize: 12,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});

export default TransactionStatusBadge;
