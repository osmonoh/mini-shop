import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center-box">
      <h1 className="heading">MINI</h1>
      <nav className="navbar">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="./shop" className="navbar-link">
          Shop
        </Link>
        <Link to="/blog" className="navbar-link">
          Blog
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
        <Link to="/login" className="navbar-link">
          Login/Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
