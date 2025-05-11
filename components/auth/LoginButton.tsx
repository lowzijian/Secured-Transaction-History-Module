import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TouchableOpacityProps,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS, SPACING } from "@/constants/theme";

type LoginButtonProps = Pick<TouchableOpacityProps, "onPress">;

const LoginButton: FC<LoginButtonProps> = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Login</Text>
        <Icon name="arrow-right" size={20} color={COLORS["text-white"]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS["primary"],
    paddingVertical: 12,
    paddingHorizontal: SPACING.S_2,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
  },
  text: {
    color: COLORS["text-white"],
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginButton;
