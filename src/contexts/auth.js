import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isUserAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ isUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
