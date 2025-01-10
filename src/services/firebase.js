"use client";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {

    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}






export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore();

const colRef = collection(db, "products");

getDocs(colRef).then((snapshot) => {
  let products = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  console.log(products);
}).catch(err => {
    console.log(err.message)
})


export const auth = getAuth(initFirebase);
export const googleProvider = new GoogleAuthProvider();
