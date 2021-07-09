import { ref } from "vue";
import { db, auth } from "../firebase/config";
// import firebase from 'firebase/app';

const getConnections = () => {
 const connections = ref([]);
 const error = ref(null);

 const loadConnections = async () => {
  try {

   let user = auth.currentUser;

   await db
    .collection("users")
    .doc(user.uid)
    .onSnapshot((snap) => {
     connections.value = snap.data().connections.map(connection => {
      return { connection };
     });
    });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { connections, error, loadConnections };
};

export default getConnections;