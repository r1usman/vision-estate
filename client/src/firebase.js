// Import the functions you need from the SDKs you need s333
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-84d3d.firebaseapp.com",
  projectId: "mern-estate-84d3d",
  storageBucket: "mern-estate-84d3d.firebasestorage.app",
  messagingSenderId: "47350709926",
  appId: "1:47350709926:web:0dd795a3600a92ec9cfe67",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
