import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',
      async authorize(credentials) {},
    }),
  ],
};
export default NextAuth(authOptions);
