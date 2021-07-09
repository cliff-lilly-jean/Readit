import { ref } from "vue";
import { db, auth } from "../firebase/config";


const getAllDbConnections = () => {
 const connections = ref([]);
 const allCurrentUsersInDb = ref([]);
 const error = ref(null);

 const load = async () => {
  try {


   const res = await db.collection("users").get();
   connections.value = res.docs.map(doc => {
    const docData = { ...doc.data(), id: doc.id };
    allCurrentUsersInDb.value.push(docData);
    return allCurrentUsersInDb.value;
   });
  }
  catch (err) {
   error.value = err.message;
   console.log(error.value);
  }
 };
 return { allCurrentUsersInDb, error, load };
};

export default getAllDbConnections;