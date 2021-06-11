import { ref } from 'vue';
import { projectFirestore } from "../firebase/config";

const getUser = (id) => {
 const books = ref(null);
 const error = ref(null);

 const load = async () => {
  try {
   const res = await projectFirestore.collection('users').doc(id).get();
   console.log(res.data());
   // books.value = res.docs.map(doc => {
   //  console.log({ ...doc.data(), id: doc.id });
   //  return { ...doc.data(), id: doc.id };
   // });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { books, error, load };
};

export default getUser;