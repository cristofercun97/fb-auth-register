// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9o09a6kMCSSAsPQ4dvED2EZNtajdt9X4",
  authDomain: "fir-auth-fb5cd.firebaseapp.com",
  projectId: "fir-auth-fb5cd",
  storageBucket: "fir-auth-fb5cd.firebasestorage.app",
  messagingSenderId: "628265799253",
  appId: "1:628265799253:web:12d5485b85b343fbe60edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) // conexion con firebase auth 
export { auth }