// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-disney-plus-app-5fcdb.firebaseapp.com",
  projectId: "react-disney-plus-app-5fcdb",
  storageBucket: "react-disney-plus-app-5fcdb.appspot.com",
  messagingSenderId: "647969979476",
  appId: "1:647969979476:web:3529ade717667fe8bb81c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
