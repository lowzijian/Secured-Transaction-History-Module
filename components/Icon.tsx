import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ComponentProps, FC } from "react";

const Icon: FC<ComponentProps<typeof MaterialCommunityIcons>> = (props) => (
  <MaterialCommunityIcons {...props} />
);

export default Icon;
