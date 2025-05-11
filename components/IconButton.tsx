import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FC } from "react";

interface IconButtonProps extends Pick<TouchableOpacityProps, "onPress"> {
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: string;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { onPress, name, size, color } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
