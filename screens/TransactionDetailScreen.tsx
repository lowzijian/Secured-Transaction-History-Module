import TransactionDetailBody from "@/components/transaction/detail/TransactionDetailBody";
import TransactionDetailHeader from "@/components/transaction/detail/TransactionDetailHeader";
import TransactionDetailLoadingSkeleton from "@/components/transaction/detail/TransactionDetailLoadingSkeleton";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import { COLORS, SPACING } from "@/constants/theme";
import useTransactionHistoryByIdQuery from "@/hooks/useTransactionHistoryByIdQuery";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

const TransactionDetailScreen = () => {
  const navigation = useNavigation();

  const params = useLocalSearchParams<{ id: string }>();

  const {
    data: transaction,
    isError,
    isLoading,
    refetch,
  } = useTransactionHistoryByIdQuery(params.id);

  useEffect(() => {
    navigation.setOptions({
      title: "Transaction Detail",
    });
  }, [navigation]);

  if (isLoading) {
    return <TransactionDetailLoadingSkeleton />;
  }

  if (!transaction || isError) {
    return <TransactionErrorState onRetry={refetch} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TransactionDetailHeader
        amount={transaction.amount}
        status={transaction.status}
        category={transaction.category}
        merchantLogo={transaction.merchantLogo}
      />
      <TransactionDetailBody {...transaction} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACING.S_2,
    backgroundColor: COLORS["background-white"],
    flex: 1,
  },
});

export default TransactionDetailScreen;
