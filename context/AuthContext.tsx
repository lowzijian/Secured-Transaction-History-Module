import { createContext } from "react";

interface AuthContextValue {
  isAuthenticated: boolean;
  authenticate: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;
