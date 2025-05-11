import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionLoadingSkeleton from "@/components/transaction/TransactionLoadingSkeleton";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";

const TransactionHistory = () => {
  const navigation = useNavigation();

  const { data, isFetching, isError, refetch } = useTransactionHistoriesQuery();

  useEffect(() => {
    navigation.setOptions({
      title: "Transaction History",
    });
  }, [navigation]);

  const onRefetch = () => {
    refetch();
  };

  if (isFetching) {
    return <TransactionLoadingSkeleton />;
  }

  if (isError || !data) {
    return <TransactionErrorState />;
  }

  return (
    <ScrollView refreshControl={<ListRefreshControl onRefresh={onRefetch} />}>
      <TransactionList transactions={data} />
    </ScrollView>
  );
};

export default TransactionHistory;
