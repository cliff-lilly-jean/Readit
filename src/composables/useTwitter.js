import { ref } from 'vue';
import firebase from "../../node_modules/firebase/app";
import { db } from '../firebase/config';

const twitterError = ref(null);

const twitterLogin = async () => {
 twitterError.value = null;
 const res = await new firebase.auth.TwitterAuthProvider();

 await firebase
  .auth()
  .signInWithPopup(res)
  .then((result) => {
   // var credential = result.credential;

   // The signed-in user info.
   let user = result.user;

   let name = user.displayName;
   let email = user.email;
   let photo = user.photoURL;

   // Make a check if there is a photoURL
   if (photo == null) {
    photo = 'https://img.icons8.com/material-rounded/48/000000/user.png';
   }

   return db.collection('users').doc(result.user.uid).set({
    name: name,
    email: email,
    photo: photo,
    books: firebase.firestore.FieldValue.arrayUnion(),
    clubs: firebase.firestore.FieldValue.arrayUnion(),
    connections: firebase.firestore.FieldValue.arrayUnion()
    // Added merge: true sor that the data doesn't get overwritten if it already exists
   }, { merge: true });

   // This gives you a twitter Access Token. You can use it to access the twitter API.
   // var accessToken = credential.accessToken;
  })
  .catch((twitterError) => {
   // Handle Errors here.
   let errorCode = twitterError.code;
   let errorMessage = twitterError.message;
   // The email of the user's account used.
   let errorEmail = twitterError.email;
   // The firebase.auth.AuthCredential type that was used.
   let credential = twitterError.credential;

   console.log(errorCode, errorMessage, errorEmail, credential);
  });

};

const useTwitter = () => {
 return { twitterError, twitterLogin };
};

export default useTwitter;