import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAuthContext from "@/hooks/useAuthContext";
import LoginButton from "@/components/auth/LoginButton";

const Login = () => {
  const { authenticate } = useAuthContext();

  const handleLogin = async () => {
    const success = await authenticate();
    if (success) {
      router.replace("/transaction");
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]} // top to bottom
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <Text style={styles.logo}>EXPO</Text>
      <View style={styles.buttonContainer}>
        <LoginButton onPress={handleLogin} />
      </View>
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
  buttonContainer: {
    marginTop: SPACING.S_4,
  },
});

export default Login;
