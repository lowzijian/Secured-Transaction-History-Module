import { COLORS, SPACING } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

const TransactionLoadingSkeleton = () => {
  return (
    <View style={styles.container}>
      <Text>[TODO] Loading Skeleton for History Screen ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_2,
    backgroundColor: COLORS["background-white"],
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TransactionLoadingSkeleton;
