import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAFS3ksKlXLHZjQHz-K234jq1m4JCJnrig",
  authDomain: "tiktok-jornada-4cd81.firebaseapp.com",
  projectId: "tiktok-jornada-4cd81",
  storageBucket: "tiktok-jornada-4cd81.appspot.com",
  messagingSenderId: "665314897178",
  appId: "1:665314897178:web:438710f051ac03719290a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;