import { FC } from "react";
import { RefreshControl, RefreshControlProps } from "react-native";

type ListRefreshControlProps = Pick<RefreshControlProps, "onRefresh">;

const ListRefreshControl: FC<ListRefreshControlProps> = (props) => {
  const { onRefresh } = props;

  return <RefreshControl refreshing={false} onRefresh={onRefresh} />;
};

export default ListRefreshControl;
