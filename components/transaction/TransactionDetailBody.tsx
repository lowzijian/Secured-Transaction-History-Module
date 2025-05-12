import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { TRANSACTION_STATUS } from "@/constants/transaction";
import { Transaction, TransactionStatus } from "@/models/transaction.model";
import { ComponentProps, FC, Fragment } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Icon from "../Icon";

type TransactionDetailBodyProps = Transaction;

const TransactionDetailBody: FC<TransactionDetailBodyProps> = (props) => {
  const {
    description,
    type,
    accountName,
    accountNumber,
    merchant,
    referenceId,
    status,
    category,
  } = props;

  const groupedTransactionDetails = {
    general: [
      {
        title: "Description",
        value: description,
      },
      {
        title: "Status",
        value: status,
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

  const renderStatusChip = (status: string) => {
    const statusLabel = status as TransactionStatus;

    const statusLabelStyle: Record<
      TransactionStatus,
      {
        backgroundColor: string;
        color: string;
        icon: ComponentProps<typeof Icon>["name"];
      }
    > = {
      [TRANSACTION_STATUS.COMPLETED]: {
        backgroundColor: COLORS["background-positive"],
        color: COLORS["content-positive"],
        icon: "check",
      },
      [TRANSACTION_STATUS.PENDING]: {
        backgroundColor: COLORS["background-warning"],
        color: COLORS["content-warning"],
        icon: "clock",
      },
      [TRANSACTION_STATUS.FAILED]: {
        backgroundColor: COLORS["background-negative"],
        color: COLORS["content-negative"],
        icon: "close-circle-outline",
      },
    };

    return (
      <View
        style={[
          styles.statusChip,
          {
            backgroundColor: statusLabelStyle[statusLabel].backgroundColor,
          },
        ]}
      >
        <Icon
          name={statusLabelStyle[statusLabel].icon}
          size={16}
          color={statusLabelStyle[statusLabel].color}
        />
        <Text style={{ color: statusLabelStyle[statusLabel].color }}>
          {status.toUpperCase()}
        </Text>
      </View>
    );
  };

  const renderTransactionDetailRow = (item: {
    title: string;
    value: string;
  }) => (
    <View style={styles.row} key={item.title}>
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      {item.title === "Status" ? (
        renderStatusChip(item.value)
      ) : (
        <Text style={styles.value}>{item.value}</Text>
      )}
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
            <View style={styles.divider} />
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
    fontSize: 14,
    color: COLORS["content-secondary"],
  },
  value: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS["border-primary"],
    marginVertical: SPACING.S_3,
  },
  statusChip: {
    paddingHorizontal: SPACING.S_1,
    paddingVertical: SPACING.S_0,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
    fontSize: 14,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});

export default TransactionDetailBody;
