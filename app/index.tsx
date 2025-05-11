import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "@/components/IconButton";

const Login = () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]} // top to bottom
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <Text style={styles.logo}>EXPO</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="fingerprint"
          size={40}
          color={COLORS["text-white"]}
          onPress={() => {}}
        />
        <IconButton
          name="face-recognition"
          size={40}
          color={COLORS["text-white"]}
          onPress={() => {}}
        />
      </View>

      <Stack.Screen options={{ headerShown: false }} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: SPACING.S_2,
    backgroundColor: COLORS["primary"],
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: COLORS["text-white"],
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 48,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.S_4,
    gap: SPACING.S_3,
  },
});

export default Login;
