import AuthService from '@/services/auth.service';
import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const success = await AuthService.authenticate();
    setIsAuthenticated(success);
    return success;
  };

  return {
    isAuthenticated,
    authenticate,
  };
};