import { ref } from 'vue';
import { auth } from '../firebase/config';

const logoutError = ref(null);

const logout = async () => {
 logoutError.value = null;
 try {
  await auth.signOut();
 } catch (error) {
  console.log(error.message);
  logoutError.value = error.message;
 }
};

const useLogout = () => {
 return { logout, logoutError };
};

export default useLogout;