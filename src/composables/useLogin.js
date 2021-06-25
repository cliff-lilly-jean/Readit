import { ref } from 'vue';
import { auth } from '../firebase/config';

const loginError = ref(null);

const login = async (email, password) => {
 loginError.value = null;

 try {
  const res = await auth.signInWithEmailAndPassword(email, password);
  loginError.value = null;

  return res;
 } catch (err) {
  console.log(err.message);
  loginError.value = "Incorrect login credentials";
 }
};

const useLogin = () => {
 return { loginError, login };
};

export default useLogin;