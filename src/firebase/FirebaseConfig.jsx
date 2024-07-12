// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCmloaPNuhvAIHgnwaeNmeXZBqjQHmcIU",
  authDomain: "myecom-764c0.firebaseapp.com",
  projectId: "myecom-764c0",
  storageBucket: "myecom-764c0.appspot.com",
  messagingSenderId: "303594401929",
  appId: "1:303594401929:web:e5e4551e5d1dc19b781658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const store = getStorage(app);

export {fireDB, auth , store};