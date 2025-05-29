import { FC, PropsWithChildren, useEffect, useState } from "react";
import authService from "@/services/auth.service";
import AuthContext from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const AUTH_STORAGE_KEY = "auth-storage-key";

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error("Error storing auth state:", error);
    }
  };

  const onBiometricAuthenticate = async () => await authService.authenticate();

  const onSignIn = async () => {
    const success = await onBiometricAuthenticate();
    if (!success) {
      Alert.alert(
        "Authentication Error",
        "An error occurred while trying to authenticate. Please try again."
      );
      return;
    }
    setIsLoggedIn(success);
    await storeAuthState({ isLoggedIn: success });
    router.replace("/");
  };

  const onSignOut = async () => {
    setIsLoggedIn(false);
    await storeAuthState({ isLoggedIn: false });
    router.replace("/login");
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (value != null) {
          const { isLoggedIn } = JSON.parse(value);
          setIsLoggedIn(isLoggedIn);
        }
      } catch (error) {
        console.error("Error retrieving auth state:", error);
      }
      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isReady,
        isLoggedIn,
        onBiometricAuthenticate,
        onSignIn,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
