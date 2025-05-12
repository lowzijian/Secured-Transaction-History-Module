import { createContext } from "react";

interface AuthContextValue {
  isReady: boolean;
  isLoggedIn: boolean;
  onBiometricAuthenticate: () => Promise<boolean>;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;
