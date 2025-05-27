import { FONT_WEIGHT } from "@/constants/theme";
import { FC } from "react";
import { Text, TextProps, Platform } from "react-native";

type BodyProps = Exclude<TextProps, "allowFontScaling">;

const Body: FC<BodyProps> = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          fontSize: Platform.OS === "ios" ? 16 : 14,
          fontWeight: FONT_WEIGHT.REGULAR,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Body;
