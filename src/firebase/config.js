import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
// import "firebase/storage";


const firebaseConfig = {
 apiKey: "AIzaSyD8og6DDVE0fCU754vPQkrDixnJDS4W1fY",
 authDomain: "readit-cj.firebaseapp.com",
 projectId: "readit-cj",
 storageBucket: "readit-cj.appspot.com",
 messagingSenderId: "968620590814",
 appId: "1:968620590814:web:58a8484fa2b99ec960a44f",
 measurementId: "G-KQ92Y80GMH"
};

// init Firebase
firebase.initializeApp(firebaseConfig);

// init Firebase service
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
