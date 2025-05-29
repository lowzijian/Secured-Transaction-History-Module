import Body from "@/components/Body";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { FC, JSX } from "react";
import { StyleSheet, View } from "react-native";

interface TransactionDetailCardProps {
  data: {
    label: string;
    value: string;
    render?: () => JSX.Element;
  }[];
}

const TransactionDetailCard: FC<TransactionDetailCardProps> = (props) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      {data.map(({ label, value, render }) => (
        <View style={styles.row} key={label}>
          <Body style={styles.label}>{label}</Body>
            {render ? (
                render()
            ) : (
                <Body >{value}</Body>
            )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS["background-secondary"],
    borderRadius: 12,
    padding: SPACING.S_2,
    gap: SPACING.S_1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: COLORS["content-neutral"],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    fontSize: 14,
  },
});

export default TransactionDetailCard;
