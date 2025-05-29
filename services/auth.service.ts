import * as LocalAuthentication from "expo-local-authentication";

const AuthService = {
  async isBiometricSupported(): Promise<boolean> {
    // Determine whether a face or fingerprint scanner is available on the device.
    const compatible = await LocalAuthentication.hasHardwareAsync();
    // Determine whether the device has saved fingerprints or facial data to use for authentication.
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    return compatible && enrolled;
  },

  async authenticate(): Promise<boolean> {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate",
        fallbackLabel: "Use Passcode",
        cancelLabel: "Cancel",
      });
      return result.success;
    } catch (error) {
      console.log("Authentication error:", error);
      return false;
    }
  },

  async getSupportedBiometricTypes(): Promise<
    LocalAuthentication.AuthenticationType[]
  > {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    return types;
  },
};

export default AuthService;
