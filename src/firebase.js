import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
 apiKey: "AIzaSyD8og6DDVE0fCU754vPQkrDixnJDS4W1fY",
 authDomain: "readit-cj.firebaseapp.com",
 projectId: "readit-cj",
 storageBucket: "readit-cj.appspot.com",
 messagingSenderId: "968620590814",
 appId: "1:968620590814:web:58a8484fa2b99ec960a44f",
 measurementId: "G-KQ92Y80GMH"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
// export const fb = firebase.auth.FacebookAuthProvider;
// export const fbSign = firebase.auth().signInWithPopup;
