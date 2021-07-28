import { ref } from "vue";
import { db, auth } from "../firebase/config";
// import firebase from 'firebase/app';

const getClubs = () => {
 const clubs = ref([]);
 const error = ref(null);

 const loadClubs = async () => {
  try {

   let user = auth.currentUser;

   await db
    .collection("users")
    .doc(user.uid)
    .onSnapshot((snap) => {
     clubs.value = snap.data().clubs.map(club => {
      return { club };
     });
    });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { clubs, error, loadClubs };
};

export default getClubs;