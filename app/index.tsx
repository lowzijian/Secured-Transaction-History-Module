import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionLoadingSkeleton from "@/components/transaction/TransactionLoadingSkeleton";
import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const TransactionHistory = () => {
  const { data, isLoading, isError } = useTransactionHistoriesQuery();

  // TODO: Implement the onRefresh function
  const onRefetch = () => {
    // Logic to refresh the transaction history
    console.log("Refreshing transaction history...");
  };

  if (isLoading) {
    return <TransactionLoadingSkeleton />;
  }

  if (isError || !data) {
    return <TransactionErrorState />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Transaction History",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS["text-white"],
          headerTitleStyle: {
            fontWeight: FONT_WEIGHT.BOLD,
          },
        }}
      />
      <ScrollView refreshControl={<ListRefreshControl onRefresh={onRefetch} />}>
        <TransactionList transactions={data} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;
