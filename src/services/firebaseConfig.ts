// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3z3J4X5X5X5X5X5X5X5X5X5X5X5X5X5X",
  authDomain: "doctor-consultation-app.firebaseapp.com",
  projectId: "doctor-consultation-app",
  storageBucket: "doctor-consultation-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:5X5X5X5X5X5X5X5X5X5X5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
