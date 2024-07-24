import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB5VLRSbQo5o5VgtAXL_D9OHhFba0n7iek",
  authDomain: "quizard-b22.firebaseapp.com",
  databaseURL: "https://quizard-b22-default-rtdb.firebaseio.com",
  projectId: "quizard-b22",
  storageBucket: "quizard-b22.appspot.com",
  messagingSenderId: "72702723842",
  appId: "1:72702723842:web:9a552aec16067c77c4e41b",
  measurementId: "G-8X78LXNXEW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const auth = getAuth(app);

export { app, db, rtdb, auth };