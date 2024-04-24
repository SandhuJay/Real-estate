import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-d8cfc.firebaseapp.com",
  projectId: "mern-d8cfc",
  storageBucket: "mern-d8cfc.appspot.com",
  messagingSenderId: "141969345259",
  appId: "1:141969345259:web:5a29c5c5769bbfb1d68cae",
  measurementId: "G-RZECDNX3JR"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);