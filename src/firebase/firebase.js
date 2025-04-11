// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLOtie3JEZNk7kCbWpsT4o1nwYg5CDPo",
  authDomain: "login-app-33a88.firebaseapp.com",
  projectId: "login-app-33a88",
  storageBucket: "login-app-33a88.firebasestorage.app",
  messagingSenderId: "1043240407591",
  appId: "1:1043240407591:web:368c25238b9206230a7402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }