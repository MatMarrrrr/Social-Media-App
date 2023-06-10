import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "../style/App.css";
import CircleLoader from "./circle-loader";

function Navbar() {
  const [user, loading] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>

      <div className="navbarProfileData">
        {loading && <CircleLoader />}

        {user && (
          <>
            <p>{user?.displayName}</p>
            {user?.photoURL && (
              <img src={user.photoURL} width="40px" height="40px" />
            )}
            <button className="logOutButton" onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
