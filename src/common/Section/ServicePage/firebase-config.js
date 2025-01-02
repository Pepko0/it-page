// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKMxWjVazWJ3n9NO0GDhfey2bQXmKGne0",
  authDomain: "itpage-910b7.firebaseapp.com",
  projectId: "itpage-910b7",
  storageBucket: "itpage-910b7.firebasestorage.app",
  messagingSenderId: "377932341091",
  appId: "1:377932341091:web:bd5038a7e2edcff68f7d56",
  measurementId: "G-MNPHMM5Y57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};