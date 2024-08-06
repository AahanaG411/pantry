// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWAI3m396BD6sd6Hz6-oCcNzf4L3LbKIo",
  authDomain: "inventory-management-4b006.firebaseapp.com",
  projectId: "inventory-management-4b006",
  storageBucket: "inventory-management-4b006.appspot.com",
  messagingSenderId: "1098574910466",
  appId: "1:1098574910466:web:8b92b4bc2b9a7d0e2d031b",
  measurementId: "G-78S8CYP10T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};