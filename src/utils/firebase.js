// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg8HuThDMIxvCxc2tqi4nR7qYvg_r4tqQ",
  authDomain: "netflix-streaming-app.firebaseapp.com",
  projectId: "netflix-streaming-app",
  storageBucket: "netflix-streaming-app.firebasestorage.app",
  messagingSenderId: "515133040516",
  appId: "1:515133040516:web:e173455807168a884b5fd1",
  measurementId: "G-6Q2BJCZWXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();