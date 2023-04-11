import { parseCookies } from 'nookies';

export const requireAuthentication = async (context, callback) => {
  const { ['beeus-token']: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return callback();
};
