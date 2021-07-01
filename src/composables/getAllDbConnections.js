import { ref } from "vue";
import { db, auth } from "../firebase/config";


const getConnections = () => {
 const connections = ref([]);
 const allCurrentUsersInDb = ref([]);
 const error = ref(null);

 const load = async () => {
  try {

   const res = await db.collection("users").get();
   connections.value = res.docs.map(doc => {
    const docData = { ...doc.data() };
    allCurrentUsersInDb.value.push(docData.name);
    return allCurrentUsersInDb.value;
   });

   // await db
   //  .collection("users")
   //  .doc(user.uid)
   //  .onSnapshot((snap) => {
   //   books.value = snap.data().books.map(book => {
   //    return { book };
   //   });
   //  });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { allCurrentUsersInDb, error, load };
};

export default getConnections;