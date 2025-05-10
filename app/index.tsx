import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionList from "@/components/transaction/TransactionList";
import { COLORS, FONT_WEIGHT } from "@/constants/theme";
import { mockTransactions } from "@/mocks/transaction.mock";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const TransactionHistory = () => {
  // TODO: Implement the onRefresh function
  const onRefetch = () => {
    // Logic to refresh the transaction history
    console.log("Refreshing transaction history...");
  };

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
        <TransactionList transactions={mockTransactions} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;
