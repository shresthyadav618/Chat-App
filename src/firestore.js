// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbSI5siAViDv84pi9k4NQdlQf68k2FGNA",
  authDomain: "chat-app-726b4.firebaseapp.com",
  projectId: "chat-app-726b4",
  storageBucket: "chat-app-726b4.appspot.com",
  messagingSenderId: "285039832921",
  appId: "1:285039832921:web:64f2e12fd97719cc5ae648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;