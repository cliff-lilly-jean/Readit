import { ref } from 'vue';
import { auth } from '../firebase/config';

const signupError = ref(null);

const signup = async (email, password, name) => {
 signupError.value = null;

 try {
  const res = await auth.createUserWithEmailAndPassword(email, password);
  if (!res) {
   throw new Error('Could not complete the signup');
  }
  await res.user.updateProfile({ displayName: name });
  signupError.value = null;

  return res;
 } catch (err) {
  signupError.value = err.message;
 }
};

const useSignup = () => {
 return { signupError, signup };
};

export default useSignup;