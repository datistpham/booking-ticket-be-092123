import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
//eslint-disable-next-line
import { app } from "./index";

const auth = getAuth();
export const loginfacebook= ()=> {
    const provider = new FacebookAuthProvider();
    provider.addScope('user_birthday');
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // const user = result.user;
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
        return console.log(errorCode, errorMessage, email, credential)
    });
}