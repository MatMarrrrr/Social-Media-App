import React from 'react'
import { Link } from "react-router-dom";
import "../style/App.css";

function Navbar() {
  return (
    <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="Login">Login</Link>
    </div>
  )
}

export default Navbar