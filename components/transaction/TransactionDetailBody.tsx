import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TransactionType } from "@/models/transaction.model";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TransactionDetailBodyProps = {
  description: string;
  type: TransactionType;
};

const TransactionDetailBody: FC<TransactionDetailBodyProps> = (props) => {
  const { description, type } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Description</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.title}>Type</Text>
        <Text>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS["border-primary"],
    paddingVertical: SPACING.S_2,
    paddingHorizontal: SPACING.S_3,
    gap: SPACING.S_1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: COLORS["content-secondary"],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS["content-neutral"],
  },
});

export default TransactionDetailBody;
