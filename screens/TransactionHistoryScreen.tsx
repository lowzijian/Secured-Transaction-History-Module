import ListRefreshControl from "@/components/ListRefreshControl";
import TransactionErrorState from "@/components/transaction/TransactionErrorState";
import TransactionList from "@/components/transaction/TransactionList";
import TransactionLoadingSkeleton from "@/components/transaction/TransactionLoadingSkeleton";
import useTransactionHistoriesQuery from "@/hooks/useTransactionHistoriesQuery";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import IconButton from "@/components/IconButton";
import useAuthContext from "@/hooks/useAuthContext";

const TransactionHistoryScreen = () => {
  const { onBiometricAuthenticate } = useAuthContext();

  const [isNextFetch, setIsNextFetch] = useState(false);
  const [isAmountMasked, setIsAmountMasked] = useState(true);

  const { data, isLoading, isError, refetch, isRefetching } =
    useTransactionHistoriesQuery(isNextFetch);

  // mimic new paginated data being fetched after pull to refresh
  useEffect(() => {
    if (data) {
      setIsNextFetch(true);
    }
  }, [data]);

  const onRefetch = () => {
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
      <ScrollView
        refreshControl={<ListRefreshControl onRefresh={onRefetch} />}
        contentContainerStyle={styles.contentContainer}
      >
        {isRefetching && <Text>Loading...</Text>}
        <TransactionList transactions={data} isAmountMasked={isAmountMasked} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLORS["background-white"],
    paddingHorizontal: SPACING.S_2,
    paddingVertical: SPACING.S_3,
  },
});

export default TransactionHistoryScreen;
