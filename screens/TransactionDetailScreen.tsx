import TransactionDetailBody from "@/components/transaction/TransactionDetailBody";
import TransactionDetailErrorState from "@/components/transaction/TransactionDetailErrorState";
import TransactionDetailHeader from "@/components/transaction/TransactionDetailHeader";
import TransactionDetailLoadingSkeleton from "@/components/transaction/TransactionDetailLoadingSkeleton";
import { SPACING } from "@/constants/theme";
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
    return <TransactionDetailErrorState />;
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TransactionDetailHeader
        amount={transaction.amount}
        date={transaction.date}
      />
      <TransactionDetailBody
        description={transaction.description}
        type={transaction.type}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACING.S_2,
  },
});

export default TransactionDetailScreen;
