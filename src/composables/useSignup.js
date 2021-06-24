import { ref } from 'vue';
import { auth, db } from '../firebase/config';


const signupError = ref(null);

const signup = async (email, password, name) => {
 signupError.value = null;
 try {
  const res = await auth.createUserWithEmailAndPassword(email, password).then(cred => {
   // The signed-in user info.
   let user = cred.user;

   let name = user.displayName;
   let email = user.email;
   return db.collection('users').doc(cred.user.uid).set({
    name: name,
    email: email,
    books: []
   }).then(() => {
    if (!res) {
     throw new Error('Could not complete the signup');
    }
    res.user.updateProfile({ displayName: name });
    signupError.value = null;
    return res;
   });
  });
 } catch (err) {
  signupError.value = err.message;
 }
};

const useSignup = () => {
 return { signupError, signup };
};

export default useSignup;