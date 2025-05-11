import TransactionDetailBody from "@/components/transaction/TransactionDetailBody";
import TransactionDetailErrorState from "@/components/transaction/TransactionDetailErrorState";
import TransactionDetailHeader from "@/components/transaction/TransactionDetailHeader";
import TransactionDetailLoadingSkeleton from "@/components/transaction/TransactionDetailLoadingSkeleton";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import useTransactionHistoryByIdQuery from "@/hooks/useTransactionHistoryByIdQuery";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const TransactionDetail = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const {
    data: transaction,
    isError,
    isFetching,
  } = useTransactionHistoryByIdQuery(params.id);

  if (isFetching) {
    return <TransactionDetailLoadingSkeleton />;
  }

  if (!transaction || isError) {
    return <TransactionDetailErrorState />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Transaction Detail",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS["text-white"],
          headerTitleStyle: {
            fontWeight: FONT_WEIGHT.BOLD,
          },
        }}
      />
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
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACING.S_2,
  },
});

export default TransactionDetail;
