import ShimmerPlaceholder from "@/components/ShimmerPlaceholder";
import { COLORS, SPACING } from "@/constants/theme";
import { Fragment } from "react";
import { StyleSheet, View } from "react-native";

const TransactionDetailLoadingSkeleton = () => {
  const renderHeaderSkeleton = () => (
    <View style={styles.headerContainer}>
      <ShimmerPlaceholder height={80} width={80} borderRadius={40} />
      <ShimmerPlaceholder height={32} width={160} borderRadius={16} />
      <ShimmerPlaceholder height={16} width={120} borderRadius={16} />
    </View>
  );

  const renderItemRowSkeleton = (index: number) => (
    <View key={index} style={styles.itemSkeleton}>
      <ShimmerPlaceholder height={24} width={150} borderRadius={16} />
      <ShimmerPlaceholder height={24} width={60} borderRadius={16} />
    </View>
  );

  const renderGroupSkeletons = (index: number) => (
    <Fragment key={index}>
      <View style={styles.group} key={index}>
        {Array.from({ length: 3 }, (_, index) => renderItemRowSkeleton(index))}
      </View>
      {index < 2 && <View style={styles.divider} />}
    </Fragment>
  );

  const renderBodySkeleton = () => (
    <View style={styles.bodyContainer}>
      {Array.from({ length: 3 }, (_, index) => renderGroupSkeletons(index))}
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
    paddingHorizontal: SPACING.S_3,
    width: "100%",
  },
  itemSkeleton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  group: {
    gap: SPACING.S_2,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS["border-primary"],
    marginVertical: SPACING.S_3,
  },
});

export default TransactionDetailLoadingSkeleton;
