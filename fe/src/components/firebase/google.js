import axios from "axios";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider  } from "firebase/auth"
//eslint-disable-next-line
import { app } from "./index";
import { API_URL } from "../../config";

export const keeplogin= (setuid, setuser)=> {
    const auth= getAuth()
    onAuthStateChanged(auth, async user=> {
        if(user) {
            setuid(()=> user.uid)
            setuser(()=> ({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL.replace("s96", "s200"),
                phonenumber: user.phoneNumber
            }))
            const res= await axios({
                url: API_URL+ "/api/v1/make/user",
                method: "post",
                data: {
                    account: user.email,
                    password: user.providerId,
                    secret_key: user.refreshToken,
                    firstname: user.displayName.split(" ")[0],
                    lastname: user.displayName.split(" ")[1],
                    id_user: user.uid
                },
                responseType: "json"
            })
            const result= await res.data
            console.log(result)
            return
        }
        else {
            return
        }
    })    
}
export const logingoogle= ()=> {
    const provider= new GoogleAuthProvider()
    const auth= getAuth()
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //eslint-disable-next-line
        const token = credential.accessToken;
        // The signed-in user info.

        //eslint-disable-next-line
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return console.log(errorCode, errorMessage, email, credential)
    });
}
export const signout= (setuid, setuser)=> {
    const auth= getAuth()
    signOut(auth).then(() => {
        // Sign-out successful.
        setuser(()=> ({
            name: "",
            phonenumber: "",
            email: "",
            photo: ""
        }))
        setuid(()=> "")
        return
      }).catch((error) => {
        // An error happened.
      });
}