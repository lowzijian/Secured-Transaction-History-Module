import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { StyleSheet, View, Button } from "react-native";
import Icon from "../Icon";
import { FC } from "react";
import Body from "@/components/Body";

interface TransactionErrorStateProps {
  onRetry: VoidFunction;
}

const TransactionErrorState: FC<TransactionErrorStateProps> = (props) => {
  const { onRetry } = props;

  return (
    <View style={styles.container}>
      <Icon
        name="robot-dead-outline"
        size={100}
        color={COLORS["primary"]}
        style={styles.logo}
      />
      <Body style={styles.label}>Something went wrong</Body>
      <Body style={styles.caption}>
        Bzzt... initializing protocol sequence 9X-Δ. Zrrrp! Memory core
        overloaded with snack data.
      </Body>
      <Button title="Retry" onPress={onRetry} color={COLORS["primary"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS["background-white"],
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.S_4,
  },
  logo: {
    marginBottom: SPACING.S_2,
  },
  label: {
    fontSize: 18,
    fontWeight: FONT_WEIGHT.BOLD,
    marginBottom: SPACING.S_1,
  },
  caption: {
    fontSize: 14,
    color: COLORS["content-secondary"],
    textAlign: "center",
  },
});

export default TransactionErrorState;
