import { COLORS } from "@/constants/theme";
import { TransactionCategory } from "@/models/transaction.model";
import { ComponentProps, FC } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../Icon";
import { TRANSACTION_CATEGORY } from "@/constants/transaction";

interface TransactionCategoryIconProps {
  category: TransactionCategory;
  size?: number;
}

const TransactionCategoryIcon: FC<TransactionCategoryIconProps> = (props) => {
  const { category, size = 24 } = props;

  const names: Record<
    TransactionCategory,
    ComponentProps<typeof Icon>["name"]
  > = {
    [TRANSACTION_CATEGORY.CASHBACK]: "hand-coin",
    [TRANSACTION_CATEGORY.EDUCATION]: "school",
    [TRANSACTION_CATEGORY.ENTERTAINMENT]: "movie",
    [TRANSACTION_CATEGORY.FOOD]: "food",
    [TRANSACTION_CATEGORY.GROCERIES]: "basket",
    [TRANSACTION_CATEGORY.HEALTH]: "hospital",
    [TRANSACTION_CATEGORY.OTHER]: "dots-vertical",
    [TRANSACTION_CATEGORY.RENT]: "greenhouse",
    [TRANSACTION_CATEGORY.SHOPPING]: "cart",
    [TRANSACTION_CATEGORY.SALARY]: "wallet",
    [TRANSACTION_CATEGORY.TRANSFER]: "bank-transfer",
    [TRANSACTION_CATEGORY.TRANSPORTATION]: "car",
    [TRANSACTION_CATEGORY.UTILITIES]: "tools",
  };

  return (
    <View style={styles.icon}>
      <Icon name={names[category]} size={size} color={COLORS["primary"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: COLORS["background-primary"],
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionCategoryIcon;
