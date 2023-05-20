// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi1CXJJRpHvo1FOx5ZI6rxLmtPorAG7eg",
  authDomain: "toys-land.firebaseapp.com",
  projectId: "toys-land",
  storageBucket: "toys-land.appspot.com",
  messagingSenderId: "285192694104",
  appId: "1:285192694104:web:1c0c6378270b8eaa951d2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
