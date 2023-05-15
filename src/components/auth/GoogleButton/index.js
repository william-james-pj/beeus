import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import styles from './googleButton.module.scss';

export const GoogleButton = () => {
  const onSuccess = (res) => {
    const details = jwt_decode(res.credential);

    console.log("Login success! Current user: ", details);
  }

  const onError = (res) => {
    console.log("Login failed!", res);
  }

  return (
      <div className={styles.googleButton}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        ></GoogleLogin>
      </div>
  );
};
