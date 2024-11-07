// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDhTiyKwNoiijgoaXqoPWjujY5s_5MXNc",
  authDomain: "it-page-mail.firebaseapp.com",
  projectId: "it-page-mail",
  storageBucket: "it-page-mail.firebasestorage.app",
  messagingSenderId: "562803234207",
  appId: "1:562803234207:web:9cc1858df4f60e442d99aa",
  measurementId: "G-SZ29FEX1P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};