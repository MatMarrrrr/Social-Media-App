// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs__65OgQXMhj-GUkcNorvb1BwOdMrgaw",
  authDomain: "fir-project-10784.firebaseapp.com",
  projectId: "fir-project-10784",
  storageBucket: "fir-project-10784.appspot.com",
  messagingSenderId: "203021456841",
  appId: "1:203021456841:web:f24c80aafcf791aa2c4418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();