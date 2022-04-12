import React from "react";

const Header = () => {
  return (
    <header className="header center-box">
      <h1 className="heading">MINI</h1>
      <nav className="navbar">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          Shop
        </a>
        <a href="#" className="navbar-link">
          Blog
        </a>
        <a href="#" className="navbar-link">
          Login/Register
        </a>
        <a href="#" className="navbar-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
