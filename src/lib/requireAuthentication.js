export const requireAuthentication = async (context, callback) => {
  const token = false;

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
