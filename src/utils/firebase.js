// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "netflix-strXXXXXXXXXXXXXfirebaseapp.com",
  projectId: "netflix-XXXXXXXXXXXXXXXXXX",
  storageBucket: "netflix-streaminXXXXXXXXXXXXXXXXrage.app",
  messagingSenderId: "51513XXXXXXXXXXXXXXXXXXXX16",
  appId: "1:51513XXXXXXXXXXXX:web:e1734558XXXXXXXXXXXXXXXXXfd1",
  measurementId: "G-6Q2XXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();