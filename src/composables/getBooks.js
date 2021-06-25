import { ref } from "vue";
import { db, auth } from "../firebase/config";
// import firebase from 'firebase/app';

const getBooks = () => {
 const books = ref([]);
 const error = ref(null);

 const load = async () => {
  try {

   let user = auth.currentUser;

   await db
    .collection("users")
    .doc(user.uid)
    .onSnapshot((snap) => {
     books.value = snap.data().books.map(book => {
      return { book };
     });
    });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { books, error, load };
};

export default getBooks;