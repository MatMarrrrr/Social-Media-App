// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9NpEdG4CdHFvr8mfgmu7xmJBRv-2AmY",
  authDomain: "social-media-app-ed3c0.firebaseapp.com",
  projectId: "social-media-app-ed3c0",
  storageBucket: "social-media-app-ed3c0.appspot.com",
  messagingSenderId: "629056579250",
  appId: "1:629056579250:web:986bf1d10a3ac567960bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);