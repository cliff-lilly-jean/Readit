import { ref } from "vue";
import { db } from "../firebase/config";

const getUsers = () => {
 const books = ref([]);
 const error = ref(null);

 const load = async () => {
  try {
   const res = await db.collection('users').get();

   books.value = res.docs.map(doc => {

    return { ...doc.data(), id: doc.id };
   });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { books, error, load };
};

export default getUsers;