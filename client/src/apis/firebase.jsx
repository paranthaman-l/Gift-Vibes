import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB6E7lXv-JYZiFcLjfUo6pffVu6BEoJwkw",
  authDomain: "giftvibes-1612.firebaseapp.com",
  projectId: "giftvibes-1612",
  storageBucket: "giftvibes-1612.appspot.com",
  messagingSenderId: "60037233050",
  appId: "1:60037233050:web:2ff1552848f98fc3c0a223",
  measurementId: "G-0KQJPNY95M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };