import { COLORS, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import { FC, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import Divider from "@/components/Divider";
import Body from "@/components/Body";
import { formatTransactionDate } from "@/utils/transaction.utils";
import { DATE_FORMAT } from "@/utils/date.util";

type TransactionDetailBodyProps = Transaction;

const TransactionDetailBody: FC<TransactionDetailBodyProps> = (props) => {
  const {
    description,
    type,
    accountName,
    accountNumber,
    merchant,
    referenceId,
    category,
    date,
  } = props;

  const groupedTransactionDetails = {
    general: [
      {
        title: "Description",
        value: description,
      },
      {
        title: "Date",
        value: formatTransactionDate(
          date,
          DATE_FORMAT.SHORT_MONTH_DAY_COMMA_STANDARD_CLOCK_MERIDIEM
        ),
      },
    ],
    account: [
      {
        title: "Account Number",
        value: accountNumber,
      },
      {
        title: "Account Name",
        value: accountName,
      },
      {
        title: "Card Type",
        value: type,
      },
    ],
    merchant: [
      {
        title: "Merchant",
        value: merchant,
      },
      {
        title: "Category",
        value: category,
      },
      {
        title: "Reference ID",
        value: referenceId,
      },
    ],
  };

  const renderTransactionDetailRow = (item: {
    title: string;
    value: string;
  }) => (
    <View style={styles.row} key={item.title}>
      <Body style={styles.title}>{item.title.toUpperCase()}</Body>
      <Body>{item.value}</Body>
    </View>
  );

  return (
    <View style={styles.container}>
      {Object.entries(groupedTransactionDetails).map(([group, rows], index) => (
        <Fragment key={group}>
          <View style={styles.group}>
            {rows.map(renderTransactionDetailRow)}
          </View>
          {index < Object.keys(groupedTransactionDetails).length - 1 && (
            <Divider />
          )}
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.S_2,
    paddingHorizontal: SPACING.S_3,
    gap: SPACING.S_3,
  },
  group: {
    gap: SPACING.S_2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS["content-secondary"],
  },
});

export default TransactionDetailBody;
