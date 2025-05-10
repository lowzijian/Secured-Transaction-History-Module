import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionList from "@/components/transaction/TransactionList";
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
          headerStyle: { backgroundColor: "#0000FF" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
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
