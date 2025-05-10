import TransactionList from "@/components/transaction/TransactionList";
import { mockTransactions } from "@/mocks/transaction.mock";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

const TransactionHistory = () => {
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
      <ScrollView>
        <TransactionList transactions={mockTransactions} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;
