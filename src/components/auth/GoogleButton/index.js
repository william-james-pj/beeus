import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export const GoogleButton = () => {
  const clientId = "139750766499-mgrc2tcu78h56pnuoq701g0vi7r07svh.apps.googleusercontent.com";


  const onSuccess = (res) => {
    console.log("Login success! Current user: ", res.profileObject);
  }

  const onFailure = (res) => {
    console.log("Login failed!", res);
  }

  return (
    <GoogleOAuthProvider>
      <div>
        <GoogleLogin 
          clientId={clientId} 
          buttonText="Entrar com o Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        ></GoogleLogin>
      </div>
    </GoogleOAuthProvider>
  );
};
