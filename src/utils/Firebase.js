// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7uHPpGiKu-fmWuUJRCdzz5LKgkeK0kYU",
  authDomain: "neura-8b5e9.firebaseapp.com",
  projectId: "neura-8b5e9",
  storageBucket: "neura-8b5e9.appspot.com",
  messagingSenderId: "845677501504",
  appId: "1:845677501504:web:e424509609666a0cdb93a5",
  measurementId: "G-SKQNZGTW2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()