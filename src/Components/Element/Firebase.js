// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXY3Kd63f10DmATBU_adrBclkOBybEGNk",
  authDomain: "signup-login-ed70f.firebaseapp.com",
  projectId: "signup-login-ed70f",
  storageBucket: "signup-login-ed70f.appspot.com",
  messagingSenderId: "259306192220",
  appId: "1:259306192220:web:682b82ba1c71b6d0059599"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

