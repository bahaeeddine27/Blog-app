// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d9766.firebaseapp.com",
  projectId: "blog-d9766",
  storageBucket: "blog-d9766.appspot.com",
  messagingSenderId: "127617514331",
  appId: "1:127617514331:web:b970123530f3b13e2b787e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);