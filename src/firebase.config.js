// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo",
  authDomain: "meggsrental.firebaseapp.com",
  projectId: "meggsrental",
  storageBucket: "meggsrental.appspot.com",
  messagingSenderId: "404521719390",
  appId: "1:404521719390:web:849d9cc2652b38b09786cf",
  measurementId: "G-EYS077BY03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
