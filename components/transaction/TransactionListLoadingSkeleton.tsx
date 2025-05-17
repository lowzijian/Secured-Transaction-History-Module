import { COLORS, SPACING } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import ShimmerPlaceholder from "../ShimmerPlaceholder";

const SKELETON_COUNT = 10;

const TransactionListLoadingSkeleton = () => {
  const renderSkeletonItem = (index: number) => (
    <View key={index} style={styles.itemContainer}>
      <ShimmerPlaceholder width={40} height={40} borderRadius={20} />
      <View style={styles.content}>
        <ShimmerPlaceholder width={"100%"} height={20} borderRadius={16} />
        <ShimmerPlaceholder width={"40%"} height={20} borderRadius={16} />
      </View>
      <ShimmerPlaceholder width={60} height={20} borderRadius={16} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ShimmerPlaceholder
        width={100}
        height={20}
        borderRadius={16}
        style={styles.titleSkeleton}
      />
      {Array.from({ length: SKELETON_COUNT }, (_, index) =>
        renderSkeletonItem(index)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S_2,
    backgroundColor: COLORS["background-white"],
    flex: 1,
  },
  titleSkeleton: {
    marginBottom: SPACING.S_1,
  },
  itemContainer: {
    flexDirection: "row",
    gap: SPACING.S_2,
    paddingVertical: SPACING.S_2,
  },
  content: {
    flexGrow: 1,
    gap: SPACING.S_1,
  },
});

export default TransactionListLoadingSkeleton;
