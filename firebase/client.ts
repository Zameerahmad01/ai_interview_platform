// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTJQhdC59eeUhLyw2uFgc9ChhK9uT_U0k",
  authDomain: "prepwise-af521.firebaseapp.com",
  projectId: "prepwise-af521",
  storageBucket: "prepwise-af521.firebasestorage.app",
  messagingSenderId: "623812892443",
  appId: "1:623812892443:web:7afc68402244aba31a25be",
  measurementId: "G-SW3JZYM5Q9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
