import { signInRequest, signUpRequest } from '@/services/authService';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isUserAuthenticated = () => !!user;

  async function signUp({ name, email, password }) {
    setIsLoading(true);
    const { status } = await signUpRequest({ name, email, password });

    if (!status) {
      setIsLoading(false);
      return {
        message: 'Erro no cadastro de usuário. Tente novamente mais tarde.',
      };
    }

    Router.push('/login');
    setIsLoading(false);
  }

  async function signIn({ email, password }) {
    setIsLoading(true);
    const { name, access_token, message } = await signInRequest({
      email,
      password,
    });

    if (message) {
      setIsLoading(false);
      return { message };
    }

    setCookie(undefined, 'beeus-token', access_token, {
      maxAge: 60 * 60 * 24 * 3, // 3 days
    });

    setUser({ name, email });
    Router.push('/');
    setIsLoading(false);
  }

  function logout() {
    Router.push('/login');
    destroyCookie(undefined, 'beeus-token');
  }

  useEffect(() => {
    const { 'beeus-token': token } = parseCookies();

    if (token) {
      //recoverUserInfo
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isUserAuthenticated, isLoading, signUp, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
