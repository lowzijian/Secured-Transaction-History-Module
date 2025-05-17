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
    isFetching,
    refetch,
  } = useTransactionHistoryByIdQuery(params.id);

  useEffect(() => {
    navigation.setOptions({
      title: "Transaction Detail",
    });
  }, [navigation]);

  if (isFetching) {
    return <TransactionDetailLoadingSkeleton />;
  }

  if (!transaction || isError) {
    return <TransactionErrorState onRetry={refetch} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TransactionDetailHeader
        amount={transaction.amount}
        date={transaction.date}
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
