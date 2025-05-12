import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ComponentProps, FC } from "react";
import Icon from "./Icon";

type IconButtonProps = Pick<TouchableOpacityProps, "onPress"> &
  ComponentProps<typeof Icon>;

const IconButton: FC<IconButtonProps> = (props) => {
  const { onPress, name, size, color } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
