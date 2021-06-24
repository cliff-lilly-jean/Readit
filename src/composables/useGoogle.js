import { ref } from 'vue';
import firebase from "../../node_modules/firebase/app";
import { db } from '../firebase/config';

const googleError = ref(null);

const googleLogin = async () => {
 googleError.value = null;
 const res = await new firebase.auth.GoogleAuthProvider();

 await firebase
  .auth()
  .signInWithPopup(res)
  .then((result) => {
   // var credential = result.credential;

   // The signed-in user info.
   let user = result.user;

   let name = user.displayName;
   let email = user.email;

   return db.collection('users').doc(result.user.uid).update({
    name: name,
    email: email,
    books: []
   });

   // This gives you a google Access Token. You can use it to access the google API.
   // var accessToken = credential.accessToken;
  })
  .catch((googleError) => {
   // Handle Errors here.
   let errorCode = googleError.code;
   let errorMessage = googleError.message;
   // The email of the user's account used.
   let errorEmail = googleError.email;
   // The firebase.auth.AuthCredential type that was used.
   let credential = googleError.credential;

   // console.log(errorCode, errorMessage, errorEmail, credential);
  });
 // console.log();
};

const useGoogle = () => {
 return { googleError, googleLogin };
};

export default useGoogle;