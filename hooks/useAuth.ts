import AuthService from "@/services/auth.service";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const isCompatible = await AuthService.isBiometricSupported();
      setIsBiometricSupported(isCompatible);
    })();
  }, []);

  const authenticate = async () => {
    const success = await AuthService.authenticate();
    setIsAuthenticated(success);
    return success;
  };

  return {
    isAuthenticated,
    authenticate,
    isBiometricSupported,
  };
};
