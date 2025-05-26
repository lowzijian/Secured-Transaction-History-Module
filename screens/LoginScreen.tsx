import { COLORS, SPACING } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAuthContext from "@/hooks/useAuthContext";
import LoginButton from "@/components/auth/LoginButton";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  const { onSignIn } = useAuthContext();

  const handleLogin = async () => {
    await onSignIn();
  };

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]} // top to bottom
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Icon name="robot-happy" size={100} color={COLORS["text-white"]} />
      </View>
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
  logoContainer: {
    borderColor: COLORS["tertiary"],
    borderWidth: 12,
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: SPACING.S_4,
  },
  biometricDetail: {
    marginTop: SPACING.S_2,
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.S_1,
  },
  biometricStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  biometricStatusText: {
    fontSize: 14,
    color: COLORS["text-white"],
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: COLORS["text-white"],
    marginHorizontal: SPACING.S_1,
  },
});

export default LoginScreen;
