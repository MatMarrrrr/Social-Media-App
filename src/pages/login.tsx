import React from "react";
import "../style/Login.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Login;
