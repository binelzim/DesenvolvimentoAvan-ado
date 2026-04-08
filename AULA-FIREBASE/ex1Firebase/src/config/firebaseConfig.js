import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVFwyaJjS3BrRpu2LA8Orev3roDFf5TKM",
  authDomain: "unipam-aula-rafael.firebaseapp.com",
  projectId: "unipam-aula-rafael",
  storageBucket: "unipam-aula-rafael.firebasestorage.app",
  messagingSenderId: "659378409124",
  appId: "1:659378409124:web:aa2e1e1e71091e2b8de031",
  measurementId: "G-EQJQ5MFDTC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);