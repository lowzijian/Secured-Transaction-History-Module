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
  const { category, size = 40 } = props;

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
    <View
      style={[
        styles.icon,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Icon
        name={names[category]}
        size={size * 0.6}
        color={COLORS["primary"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLORS["background-primary"],
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionCategoryIcon;
