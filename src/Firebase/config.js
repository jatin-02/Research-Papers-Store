// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const {FIREBASE_API_KEY, FIREBASE_API_ID} = process.env
const firebaseConfig = {
  apiKey: `"${FIREBASE_API_KEY}`,
  authDomain: "reseachit.firebaseapp.com",
  projectId: "reseachit",
  storageBucket: "reseachit.appspot.com",
  messagingSenderId: "1055291125060",
  appId: `${FIREBASE_API_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
