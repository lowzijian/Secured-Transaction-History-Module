import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAuthContext from "@/hooks/useAuthContext";
import LoginButton from "@/components/auth/LoginButton";
import useAuthBiometricSupport from "@/hooks/useAuthBiometricSupport";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  const { authenticate } = useAuthContext();
  const { isBiometricSupported, supportedTypes } = useAuthBiometricSupport();

  const handleLogin = async () => {
    const success = await authenticate();
    if (success) {
      router.replace("/(transaction)");
    }
  };

  const renderBiometricSupportedTypeIndicator = (type: string) => {
    const names: Record<string, keyof typeof Icon.glyphMap> = {
      FINGERPRINT: "fingerprint",
      FACIAL_RECOGNITION: "face-recognition",
      IRIS: "eye",
    };

    return (
      <Icon
        name={names[type]}
        size={12}
        color={COLORS["text-white"]}
        key={type}
      />
    );
  };

  const renderBiometricDetail = () => {
    return (
      <View style={styles.biometricDetail}>
        <Text style={styles.biometricStatusText}>Biometric authentication</Text>
        <View
          style={[
            styles.biometricStatus,
            {
              backgroundColor: isBiometricSupported
                ? COLORS["background-positive"]
                : COLORS["background-negative"],
              borderColor: isBiometricSupported
                ? COLORS["content-positive"]
                : COLORS["content-negative"],
              borderWidth: 1,
            },
          ]}
        />
        <View style={styles.divider} />
        <Text style={styles.biometricStatusText}>Supported :</Text>
        {supportedTypes.map(renderBiometricSupportedTypeIndicator)}
      </View>
    );
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
        {renderBiometricDetail()}
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
