// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // temp firestore database
  // apiKey: "AIzaSyAO0OE2PefvPhh1ccBdOT71_cpw8V96dxs",
  // authDomain: "reseachit.firebaseapp.com",
  // projectId: "reseachit",
  // storageBucket: "reseachit.appspot.com",
  // messagingSenderId: "1055291125060",
  // appId: "1:1055291125060:web:df1f4da58fb6c59decfb11",

  // temp firestore database made for testing
  apiKey: "AIzaSyCWk9ugdHrW0pM87ZVQrN9tB_9ImSRCqJQ",
  authDomain: "temp-75671.firebaseapp.com",
  projectId: "temp-75671",
  storageBucket: "temp-75671.appspot.com",
  messagingSenderId: "998239557805",
  appId: "1:998239557805:web:4137d0a1da3dfda4f10e24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth };
