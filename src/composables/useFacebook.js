import { ref } from 'vue';
import firebase from "../../node_modules/firebase/app";
import { db } from '../firebase/config';


const facebookError = ref(null);

const facebookLogin = async () => {
 facebookError.value = null;
 const res = await new firebase.auth.FacebookAuthProvider();
 await firebase
  .auth()
  .signInWithPopup(res)
  .then((result) => {

   facebookError.value = null;
   // var credential = result.credential;

   // The signed-in user info.
   let user = result.user;

   let name = user.displayName;
   let email = user.email;

   return db.collection('users').doc(result.user.uid).update({
    name: name,
    email: email
   });
   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
   // var accessToken = credential.accessToken;
  })
  .catch((facebookError) => {
   // Handle Errors here.
   let errorCode = facebookError.code;
   let errorMessage = facebookError.message;
   // The email of the user's account used.
   let errorEmail = facebookError.email;
   // The firebase.auth.AuthCredential type that was used.
   let credential = facebookError.credential;

   // console.log(errorCode, errorMessage, errorEmail, credential);
  });
};

const useFacebook = () => {
 return { facebookError, facebookLogin };
};

export default useFacebook;