import React from "react";
import "../style/Login.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <button className="signInButton" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Login;
