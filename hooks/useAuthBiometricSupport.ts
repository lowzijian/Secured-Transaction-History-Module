import AuthService from "@/services/auth.service";
import { useEffect, useState } from "react";
import { AuthenticationType } from "expo-local-authentication";

const useAuthBiometricSupport = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [supportedTypes, setSupportedTypes] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const isCompatible = await AuthService.isBiometricSupported();
      setIsBiometricSupported(isCompatible);

      if (isCompatible) {
        const types = await AuthService.getSupportedBiometricTypes();
        setSupportedTypes(types.map((type) => AuthenticationType[type]));
      }
    })();
  }, []);

  return {
    isBiometricSupported,
    supportedTypes,
  };
};

export default useAuthBiometricSupport;
