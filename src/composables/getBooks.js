import { ref } from "vue";
import { db, auth } from "../firebase/config";
// import firebase from 'firebase/app';

const getBooks = () => {
 const books = ref([]);
 const error = ref(null);

 const load = async () => {
  try {
   // TODO: Get the user data for a sepcific logged in user
   let user = auth.currentUser;

   const response = await db.collection('users').doc(user.uid).get().then(cred => {
    books.value =
     cred.data().books.map(books => {
      console.log(books);
      return { books };
     });
   });
   books.value = response;
  }

  // const res = await db.collection('users').get();
  // books.value = res.docs.map(doc => {
  //  return { ...doc.data().books, id: doc.id };
  // });


  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { books, error, load };
};

export default getBooks;