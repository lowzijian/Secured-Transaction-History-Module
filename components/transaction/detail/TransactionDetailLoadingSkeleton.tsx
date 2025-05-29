import ShimmerPlaceholder from "@/components/ShimmerPlaceholder";
import { COLORS, SPACING } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const TransactionDetailLoadingSkeleton = () => {
  const renderHeaderSkeleton = () => (
    <View style={styles.headerContainer}>
      <ShimmerPlaceholder height={80} width={80} borderRadius={40} />
      <ShimmerPlaceholder height={40} width={160} borderRadius={12} />
      <ShimmerPlaceholder height={30} width={250} borderRadius={12} />
    </View>
  );

  const renderBodySkeleton = () => (
    <View style={styles.bodyContainer}>
      <ShimmerPlaceholder height={120} width={"100%"} borderRadius={12} />
      <ShimmerPlaceholder height={80} width={"100%"} borderRadius={12} />
      <ShimmerPlaceholder height={80} width={"100%"} borderRadius={12} />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeaderSkeleton()}
      {renderBodySkeleton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_2,
    backgroundColor: COLORS["background-white"],
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    paddingVertical: SPACING.S_4,
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.S_1,
  },
  bodyContainer: {
    paddingVertical: SPACING.S_2,
    width: "100%",
    gap: SPACING.S_3,
  },
});

export default TransactionDetailLoadingSkeleton;
