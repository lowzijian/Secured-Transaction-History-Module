import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TouchableOpacityProps,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import Body from "@/components/Body";

type GetStartedButtonProps = Pick<TouchableOpacityProps, "onPress">;

const GetStartedButton: FC<GetStartedButtonProps> = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Body style={styles.text}>Get Started</Body>
        <Icon name="arrow-right" size={20} color={COLORS["text-white"]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS["primary"],
    padding: SPACING.S_2,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
  },
  text: {
    color: COLORS["text-white"],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
  },
});

export default GetStartedButton;
