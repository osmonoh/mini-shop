import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center-box">
      <h1 className="heading">MINI</h1>
      <nav className="navbar">
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? "navbar-link active-link" : "navbar-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="./shop"
          className={(navData) =>
            navData.isActive ? "navbar-link active-link" : "navbar-link"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/blog"
          className={(navData) =>
            navData.isActive ? "navbar-link active-link" : "navbar-link"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) =>
            navData.isActive ? "navbar-link active-link" : "navbar-link"
          }
        >
          Contact
        </NavLink>

        <div className="log-reg">
          <NavLink
            to="/login"
            className={(navData) =>
              navData.isActive ? "navbar-link active-link" : "navbar-link"
            }
          >
            Login
          </NavLink>
          /
          <NavLink
            to="/register"
            className={(navData) =>
              navData.isActive ? "navbar-link active-link" : "navbar-link"
            }
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
