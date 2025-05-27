import { COLORS, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import {
  formatTransactionAmount,
  groupedTransactionByMonth,
  maskTransactionAmount,
} from "@/utils/transaction.utils";
import { ArrayElement } from "@/utils/types";
import { FC } from "react";
import {
  RefreshControl,
  SectionList,
  SectionListProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
} from "react-native";
import TransactionItem from "./TransactionItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Body from "@/components/Body";

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

  const { bottom } = useSafeAreaInsets();

  const groupedTransaction = groupedTransactionByMonth(transactions);

  const renderSectionHeader: TransactionListSectionProps["renderSectionHeader"] =
    ({ section: { title } }) => (
      <Body style={styles.label}>{title.toUpperCase()}</Body>
    );

  const renderItem: TransactionListSectionProps["renderItem"] = ({
    item: transaction,
  }) => <TransactionItem {...transaction} isAmountMasked={isAmountMasked} />;

  const renderSectionFooter: TransactionListSectionProps["renderSectionFooter"] =
    ({ section: { total } }) => {
      const totalAmountStyle: StyleProp<TextStyle> = {
        color: total > 0 ? COLORS["content-positive"] : COLORS["text-primary"],
        fontSize: 16
      };

      return (
        <View style={styles.footer}>
          <Body style={styles.caption}>Total</Body>
          <Body style={totalAmountStyle}>
            {isAmountMasked
              ? maskTransactionAmount(total)
              : formatTransactionAmount(total)}
          </Body>
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
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: bottom },
      ]}
      refreshControl={
        <RefreshControl onRefresh={onPullToRefresh} refreshing={isRefreshing} />
      }
      stickySectionHeadersEnabled={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS["background-white"],
  },
  contentContainer: {
    paddingTop: SPACING.S_2,
    paddingHorizontal: SPACING.S_2,
  },
  label: {
    fontSize: 14,
    color: COLORS["content-secondary"],
  },
  footer: {
    flexDirection: "row",
    gap: SPACING.S_2,
    marginLeft: "auto",
    marginBottom: SPACING.S_1,
    alignContent: "center",
  },
  caption: {
    color: COLORS["content-secondary"],
    fontSize: 14,
  },
});

export default TransactionList;
