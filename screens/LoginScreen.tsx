import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useAuthContext from "@/hooks/useAuthContext";
import LoginButton from "@/components/auth/GetStartedButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Body from "@/components/Body";
import useAuthBiometricSupport from "@/hooks/useAuthBiometricSupport";

const LOGO_SIZE = 40;

const LoginScreen = () => {
  const { onSignIn } = useAuthContext();
  const { bottom } = useSafeAreaInsets();

  useAuthBiometricSupport();

  const renderContent = () => (
    <View>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Body style={styles.brand}>Trusta</Body>
      </View>
      <Body style={styles.heading}>
        Let&apos;s grow your financial future together
      </Body>
      <Body style={styles.subheading}>
        Trusta helps you manage your finances with confidence, protect what
        matters, and achieve your goals — building a brighter future for you and
        your family.
      </Body>
    </View>
  );

  const renderGetStartedButton = () => <LoginButton onPress={onSignIn} />;

  return (
    <ImageBackground
      style={styles.container}
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          "rgba(0, 0, 255, 1)",
          "rgba(0, 0, 255, 0.7)",
          "rgba(0, 0, 255, 0.4)",
          "rgba(0, 0, 255, 0.3)",
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.9)",
          "rgba(255, 255, 255, 1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <View
        style={[
          styles.body,
          {
            paddingBottom: bottom + SPACING.S_4,
          },
        ]}
      >
        {renderContent()}
        {renderGetStartedButton()}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    gap: SPACING.S_2,
    paddingHorizontal: SPACING.S_2,
  },
  logoContainer: {
    flexDirection: "row",
    gap: SPACING.S_0,
    alignItems: "center",
    marginBottom: SPACING.S_2,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  brand: {
    fontSize: 24,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    color: COLORS["primary"],
  },
  heading: {
    fontSize: 30,
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: 36,
    marginBottom: SPACING.S_1,
  },
  subheading: {
    fontSize: 18,
    color: COLORS["content-secondary"],
    lineHeight: 24,
  },
});

export default LoginScreen;
