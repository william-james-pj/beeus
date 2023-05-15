import { AuthProvider } from '@/contexts/authContext';
import '@/styles/globals.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const clientId = "139750766499-mgrc2tcu78h56pnuoq701g0vi7r07svh.apps.googleusercontent.com";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}
