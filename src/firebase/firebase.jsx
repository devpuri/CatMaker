// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgSYJXqB4we_ts8bAoumXk0bwu99O_uQY",
  authDomain: "catmaker-181f1.firebaseapp.com",
  projectId: "catmaker-181f1",
  storageBucket: "catmaker-181f1.appspot.com",
  messagingSenderId: "17566033088",
  appId: "1:17566033088:web:7edab8b1ea5fdfb2d33925",
  measurementId: "G-5YKV6WHR6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
