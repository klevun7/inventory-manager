// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACfoMICssV17AYbC1T-3PLApxayEfo3Wk",
  authDomain: "inventory-manger-f5145.firebaseapp.com",
  projectId: "inventory-manger-f5145",
  storageBucket: "inventory-manger-f5145.appspot.com",
  messagingSenderId: "506348742688",
  appId: "1:506348742688:web:6095169547a46e6235f445",
  measurementId: "G-SCNMPXK6GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);