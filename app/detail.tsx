import TransactionDetailBody from "@/components/transaction/TransactionDetailBody";
import TransactionDetailHeader from "@/components/transaction/TransactionDetailHeader";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { mockTransactions } from "@/mocks/transaction.mock";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

const TransactionDetail = () => {
  const params = useLocalSearchParams<{ id: string }>();

  // TODO: retrieve transaction from mock API
  const transaction = mockTransactions.find((item) => item.id === params.id);

  // TODO: handle empty / error state
  if (!transaction) {
    return null;
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
