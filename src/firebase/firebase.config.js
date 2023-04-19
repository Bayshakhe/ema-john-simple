// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc1uKGJkEqShVGQ4W5SWfW_-IlM8gJqUU",
  authDomain: "ema-john-firebase-auth-c4434.firebaseapp.com",
  projectId: "ema-john-firebase-auth-c4434",
  storageBucket: "ema-john-firebase-auth-c4434.appspot.com",
  messagingSenderId: "44910808928",
  appId: "1:44910808928:web:44412ebd0220705a461805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;