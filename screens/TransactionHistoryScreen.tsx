import IconButton from "@/components/IconButton";
import TransactionList from "@/components/transaction/list/TransactionList";
import TransactionListLoadingSkeleton from "@/components/transaction/list/TransactionListLoadingSkeleton";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import { COLORS, SPACING } from "@/constants/theme";
import useAuthContext from "@/hooks/useAuthContext";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const TransactionHistoryScreen = () => {
  const { onBiometricAuthenticate } = useAuthContext();

  const [isNextFetch, setIsNextFetch] = useState(false);
  const [isAmountMasked, setIsAmountMasked] = useState(true);

  const { data, isLoading, isError, refetch, isFetching } =
    useTransactionHistoriesQuery(isNextFetch);

  // mimic new paginated data being fetched after pull to refresh
  useEffect(() => {
    if (data) {
      setIsNextFetch(true);
    }
  }, [data]);

  const onPullToRefresh = () => {
    refetch();
  };

  const onToggleMask = async () => {
    if (isAmountMasked) {
      const isVerified = await onBiometricAuthenticate();
      if (!isVerified) return;
    }
    setIsAmountMasked((prev) => !prev);
  };

  if (isLoading) {
    return <TransactionListLoadingSkeleton />;
  }

  if (isError || !data) {
    return <TransactionErrorState onRetry={refetch} />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View style={styles.headerAction}>
              <IconButton
                onPress={onToggleMask}
                name={isAmountMasked ? "eye" : "eye-off"}
                size={20}
                color={COLORS["primary"]}
              />
            </View>
          ),
        }}
      />
      <TransactionList
        transactions={data}
        isAmountMasked={isAmountMasked}
        onPullToRefresh={onPullToRefresh}
        isRefreshing={isFetching}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerAction: {
    width: 20,
    height: 20,
    marginRight: SPACING.S_0,
  },
});

export default TransactionHistoryScreen;
