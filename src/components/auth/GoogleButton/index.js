import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import styles from './googleButton.module.scss';

export const GoogleButton = ({ handleSuccess, handleError }) => {
  const onSuccess = (res) => {
    const details = jwt_decode(res.credential);
    handleSuccess(details);
  };

  const onError = (res) => {
    handleError();
  };

  return (
    <div className={styles.googleButton}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        theme="filled_black"
      />
    </div>
  );
};
