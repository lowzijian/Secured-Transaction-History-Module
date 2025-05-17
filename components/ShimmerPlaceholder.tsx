import { FC } from "react";
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";

type ShimmerPlaceholderProps = {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: number;
  style?: Omit<StyleProp<ViewStyle>, "borderRadius" | "width" | "height">;
};

const ShimmerPlaceholder: FC<ShimmerPlaceholderProps> = (props) => {
  const { width, height, borderRadius, style } = props;

  return (
    <View
      style={{
        ...style,
        width,
        height,
        borderRadius,
        backgroundColor: "#E0E0E0",
      }}
    />
  );
};

export default ShimmerPlaceholder;
