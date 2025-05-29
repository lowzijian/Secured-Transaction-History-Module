import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import {
  TransactionCategory,
  TransactionStatus,
} from "@/models/transaction.model";
import { formatTransactionAmount } from "@/utils/transaction.utils";
import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import TransactionCategoryIcon from "../TransactionCategoryIcon";
import Body from "@/components/Body";
import TransactionStatusBadge from "./TransactionStatusBadge";

interface TransactionDetailHeaderProps {
  amount: number;
  status: TransactionStatus;
  category: TransactionCategory;
  merchantLogo?: string;
}

const TransactionDetailHeader: FC<TransactionDetailHeaderProps> = (props) => {
  const { amount, category, merchantLogo, status } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TransactionCategoryIcon category={category} size={80} />
        {merchantLogo && (
          <View style={styles.merchantIconContainer}>
            <Image source={{ uri: merchantLogo }} style={styles.merchantIcon} />
          </View>
        )}
      </View>
      <Body style={styles.header}>{`${
        amount > 0 ? "+" : "-"
      }${formatTransactionAmount(amount)}`}</Body>
      <TransactionStatusBadge status={status} />
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
    marginBottom: SPACING.S_2,
  },
  merchantIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: COLORS["background-white"],
    borderColor: COLORS["primary"],
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -5,
    bottom: -5,
    zIndex: 1,
    shadowColor: "#000",
  },
  merchantIcon: {
    width: 18,
    height: 18,
    objectFit: "contain",
  },
  header: {
    fontSize: 30,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    marginBottom: SPACING.S_1,
  },
});

export default TransactionDetailHeader;
