// eslint-disable-next-line
import {
  GoogleAuthProvider,
  signInWithPopup,
  //   signInWithRedirect,
  //   signOut,
  //   onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

//iniciar sesión con una ventana emergente:
export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line
      const token = credential.accessToken;
      // The signed-in user info.
      // eslint-disable-next-line
      const user = result.user;
      console.log('Hola '+ user.email)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // eslint-disable-next-line
      const errorCode = error.code;
      // eslint-disable-next-line
      const errorMessage = error.message;
      // The email of the user's account used.
      // eslint-disable-next-line
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      // eslint-disable-next-line
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
