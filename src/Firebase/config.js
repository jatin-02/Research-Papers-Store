// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO0OE2PefvPhh1ccBdOT71_cpw8V96dxs",
  authDomain: "reseachit.firebaseapp.com",
  projectId: "reseachit",
  storageBucket: "reseachit.appspot.com",
  messagingSenderId: "1055291125060",
  appId: "1:1055291125060:web:df1f4da58fb6c59decfb11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
