import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TransactionCategory } from "@/models/transaction.model";
import {
    formatTransactionAmount,
    formatTransactionDate,
} from "@/utils/transaction.utils";
import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import TransactionCategoryIcon from "../TransactionCategoryIcon";
import Body from "@/components/Body";

interface TransactionDetailHeaderProps {
  amount: number;
  date: string;
  category: TransactionCategory;
  merchantLogo?: string;
}

const TransactionDetailHeader: FC<TransactionDetailHeaderProps> = (props) => {
  const { amount, date, category, merchantLogo } = props;

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
      <Body style={styles.header}>{formatTransactionAmount(amount)}</Body>
      <Body style={styles.caption}>{formatTransactionDate(date)}</Body>
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
    fontSize: 32,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  caption: {
    fontSize: 16,
    color: COLORS["content-secondary"],
  },
});

export default TransactionDetailHeader;
