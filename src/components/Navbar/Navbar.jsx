import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <p>Home</p>
        <p>About us</p>
        <Link className='link' to={"/products"}>Products</Link>
        <Link className='link' to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar