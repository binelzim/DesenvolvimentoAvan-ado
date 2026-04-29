// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmxPVIvPwACdGwGqZSnc385jw6C8WqHc",
  authDomain: "atividade02-gabriel.firebaseapp.com",
  projectId: "atividade02-gabriel",
  storageBucket: "atividade02-gabriel.firebasestorage.app",
  messagingSenderId: "714840183973",
  appId: "1:714840183973:web:6cccfe5b5eff7445dfa94c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);