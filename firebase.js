// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firestore imports
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhqw6Aso62gPRXG2IGW_-t5IGN3N4GGE",
  authDomain: "todo-app-67f03.firebaseapp.com",
  projectId: "todo-app-67f03",
  storageBucket: "todo-app-67f03.firebasestorage.app",
  messagingSenderId: "53075308220",
  appId: "1:53075308220:web:ca73ba186ed36a35e12ab9",
  measurementId: "G-DFBH3EB7N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
