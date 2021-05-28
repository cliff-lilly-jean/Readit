import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyD8og6DDVE0fCU754vPQkrDixnJDS4W1fY",
 authDomain: "readit-cj.firebaseapp.com",
 projectId: "readit-cj",
 storageBucket: "readit-cj.appspot.com",
 messagingSenderId: "968620590814",
 appId: "1:968620590814:web:58a8484fa2b99ec960a44f",
 measurementId: "G-KQ92Y80GMH"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };