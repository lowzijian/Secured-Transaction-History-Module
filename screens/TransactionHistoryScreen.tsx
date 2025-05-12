import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionLoadingSkeleton from "@/components/transaction/TransactionLoadingSkeleton";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { COLORS } from "@/constants/theme";
import IconButton from "@/components/IconButton";
import useAuthContext from "@/hooks/useAuthContext";

const TransactionHistoryScreen = () => {
  const navigation = useNavigation();

  const { authenticate } = useAuthContext();

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

  const onToggleMask = async () => {
    if (isAmountMasked) {
      const isVerified = await authenticate();
      if (!isVerified) return;
    }
    setIsAmountMasked((prev) => !prev);
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
                onPress={onToggleMask}
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

export default TransactionHistoryScreen;
