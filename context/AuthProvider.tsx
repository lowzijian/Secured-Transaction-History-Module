import { FC, PropsWithChildren, useState } from "react";
import authService from "@/services/auth.service";
import AuthContext from "./AuthContext";

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const success = await authService.authenticate();
    setIsAuthenticated(success);
    return success;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
