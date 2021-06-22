import { ref } from 'vue';
import firebase from "../../node_modules/firebase/app";


const twitterError = ref(null);

const twitterLogin = async () => {
 twitterError.value = null;
 const res = await new firebase.auth.TwitterAuthProvider();

 firebase
  .auth()
  .signInWithPopup(res)
  .then((result) => {
   // var credential = result.credential;

   // The signed-in user info.
   let user = result.user;

   let name = user.displayName;
   let email = user.email;

   firebase.firestore().collection("users").doc(result.user.uid).set({
    name: name.value,
    email: email.value,
   });

   // This gives you a twitter Access Token. You can use it to access the twitter API.
   // var accessToken = credential.accessToken;
   let userId = result.user.uid;
   console.log(userId.value);
   // this.$router.replace("/dashboard");
  })
  .catch((twitterError) => {
   // Handle Errors here.
   let errorCode = twitterError.code;
   let errorMessage = twitterError.message;
   // The email of the user's account used.
   let errorEmail = twitterError.email;
   // The firebase.auth.AuthCredential type that was used.
   let credential = twitterError.credential;

   // console.log(errorCode, errorMessage, errorEmail, credential);
  });
 // console.log();
};

const useTwitter = () => {
 return { twitterError, twitterLogin };
};

export default useTwitter;