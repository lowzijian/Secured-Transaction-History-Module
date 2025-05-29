import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TransactionStatus, TransactionType } from "@/models/transaction.model";
import { formatTransactionAmount } from "@/utils/transaction.utils";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Body from "@/components/Body";
import TransactionStatusBadge from "./TransactionStatusBadge";
import TransactionCardTypeBadge from "./TransactionCardTypeBadge";
import Icon from "@/components/Icon";

interface TransactionDetailHeaderProps {
  amount: number;
  status: TransactionStatus;
  type: TransactionType;
}

const TransactionDetailHeader: FC<TransactionDetailHeaderProps> = (props) => {
  const { amount, status, type } = props;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              amount > 0
                ? COLORS["content-positive"]
                : COLORS["content-negative"],
            borderColor:
              amount > 0
                ? COLORS["background-positive"]
                : COLORS["background-negative"],
          },
        ]}
      >
        <Icon
          name={amount > 0 ? "arrow-down" : "arrow-up"}
          size={30}
          color={COLORS["text-white"]}
        />
      </View>
      <Body style={styles.header}>{`${
        amount < 0 ? "-" : ""
      }${formatTransactionAmount(amount)}`}</Body>
      <View style={styles.detailContainer}>
        <TransactionStatusBadge status={status} />
        <TransactionCardTypeBadge type={type} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.S_4,
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: SPACING.S_2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderStyle: "solid",
  },
  header: {
    fontSize: 30,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    marginBottom: SPACING.S_1,
  },
  detailContainer: {
    flexDirection: "row",
    gap: SPACING.S_1,
    alignItems: "center",
  },
});

export default TransactionDetailHeader;
