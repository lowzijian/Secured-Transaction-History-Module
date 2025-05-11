import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionLoadingSkeleton from "@/components/transaction/TransactionLoadingSkeleton";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/theme";
import IconButton from "@/components/IconButton";

const TransactionHistory = () => {
  const navigation = useNavigation();

  const [isAmountMasked, setIsAmountMasked] = useState(true);

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
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View>
              <IconButton
                onPress={() => setIsAmountMasked((prev) => !prev)}
                name={isAmountMasked ? "eye" : "eye-off"}
                size={24}
                color={COLORS["text-white"]}
              />
            </View>
          ),
        }}
      />
      <ScrollView refreshControl={<ListRefreshControl onRefresh={onRefetch} />}>
        <TransactionList transactions={data} isAmountMasked={isAmountMasked} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;
