import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
  apiKey: "AIzaSyAGQSU98iz4kyMKIqy4xSKOrKZY_FworCU",
  authDomain: "for-learning-44040.firebaseapp.com",
  projectId: "for-learning-44040",
  storageBucket: "for-learning-44040.appspot.com",
  messagingSenderId: "59944840094",
  appId: "1:59944840094:web:5c41273b65d3035aa0848f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth();