import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import TransactionItem from "./TransactionItem";
import {
  formatTransactionAmount,
  groupedTransactionByMonth,
  maskTransactionAmount,
} from "@/utils/transaction.utils";
import {
  SectionList,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  SectionListProps,
  RefreshControl,
} from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { ArrayElement } from "@/utils/types";

interface TransactionListProps {
  transactions: Transaction[];
  isAmountMasked: boolean;
  onPullToRefresh: VoidFunction;
  isRefreshing: boolean;
}

type TransactionListSectionProps = SectionListProps<
  Transaction,
  ArrayElement<ReturnType<typeof groupedTransactionByMonth>>
>;

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions, isAmountMasked, onPullToRefresh, isRefreshing } = props;

  const groupedTransaction = groupedTransactionByMonth(transactions);

  const renderSectionHeader: TransactionListSectionProps["renderSectionHeader"] =
    ({ section: { title } }) => (
      <Text style={styles.label}>{title.toUpperCase()}</Text>
    );

  const renderItem: TransactionListSectionProps["renderItem"] = ({
    item: transaction,
  }) => <TransactionItem {...transaction} isAmountMasked={isAmountMasked} />;

  const renderSectionFooter: TransactionListSectionProps["renderSectionFooter"] =
    ({ section: { total } }) => {
      const totalAmountStyle: StyleProp<TextStyle> = {
        color: total > 0 ? COLORS["content-positive"] : COLORS["text-primary"],
      };

      return (
        <View style={styles.footer}>
          <Text style={styles.caption}>Total</Text>
          <Text style={totalAmountStyle}>
            {isAmountMasked
              ? maskTransactionAmount(total)
              : formatTransactionAmount(total)}
          </Text>
        </View>
      );
    };

  const keyExtractor: TransactionListSectionProps["keyExtractor"] = (item) =>
    item.id;

  return (
    <SectionList
      sections={groupedTransaction}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      renderSectionFooter={renderSectionFooter}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl onRefresh={onPullToRefresh} refreshing={isRefreshing} />
      }
      stickySectionHeadersEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: SPACING.S_3,
    paddingHorizontal: SPACING.S_2,
  },
  label: {
    fontSize: 18,
    color: COLORS["content-secondary"],
  },
  footer: {
    flexDirection: "row",
    gap: SPACING.S_1,
    marginLeft: "auto",
    marginBottom: SPACING.S_1,
  },
  caption: {
    color: COLORS["content-secondary"],
  },
});

export default TransactionList;
