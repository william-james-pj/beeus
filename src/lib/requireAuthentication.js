import { getSession } from 'next-auth/react';

export const requireAuthentication = async (context, callback) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return callback({ session });
};
