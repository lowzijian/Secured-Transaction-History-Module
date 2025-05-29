import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { Transaction } from "@/models/transaction.model";
import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import Body from "@/components/Body";
import { formatTransactionDate } from "@/utils/transaction.utils";
import { DATE_FORMAT } from "@/utils/date.util";
import TransactionDetailCard from "./TransactionDetailCard";

type TransactionDetailBodyProps = Transaction;

const TransactionDetailBody: FC<TransactionDetailBodyProps> = (props) => {
  const {
    description,
    accountName,
    accountNumber,
    merchant,
    merchantLogo,
    referenceId,
    category,
    date,
  } = props;

  return (
    <View style={styles.container}>
      <TransactionDetailCard
        data={[
          {
            label: "Description",
            value: description,
          },
          {
            label: "Date",
            value: formatTransactionDate(
              date,
              DATE_FORMAT.SHORT_MONTH_DAY_COMMA_STANDARD_CLOCK_MERIDIEM
            ),
          },
          {
            label: "Category",
            value: category,
          },
        ]}
      />
      <TransactionDetailCard
        data={[
          {
            label: "Account Number",
            value: accountNumber,
          },
          {
            label: "Account Name",
            value: accountName,
          },
        ]}
      />
      <TransactionDetailCard
        data={[
          {
            label: "Reference ID",
            value: referenceId,
          },
          {
            label: "Merchant",
            value: merchant,
            render: () => (
              <View style={styles.chip}>
                {merchantLogo && (
                  <Image
                    source={{ uri: merchantLogo }}
                    style={styles.merchantLogo}
                    resizeMode="contain"
                  />
                )}
                <Body>{merchant}</Body>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.S_2,
    gap: SPACING.S_2,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
    backgroundColor: COLORS["background-tertiary"],
    padding: SPACING.S_0,
    borderRadius: 6,
  },
  merchantLogo: {
    width: 24,
    height: 24,
    borderRadius: 8,
  },
});

export default TransactionDetailBody;
