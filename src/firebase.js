import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBpKty0uUMel3csr9IYHzYEqv5f_M16fKs",
  authDomain: "final-year-11e40.firebaseapp.com",
  projectId: "final-year-11e40",
  storageBucket: "final-year-11e40.appspot.com",
  messagingSenderId: "902171145027",
  appId: "1:902171145027:web:e959608e024d5eb39a75f6",
  measurementId: "G-12MRGVY8GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app)