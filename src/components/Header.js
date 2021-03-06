import React, { useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const { inCart, inFavs } = useContext(MyContext);

  const location = useLocation();

  console.log(location.pathname);

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

      <div className="header-indicators">
        <NavLink
          to="/cart"
          className={(navData) => (navData.isActive ? "active-icon" : "")}
        >
          <div className="indicator-container">
            <IoCartOutline className="cart-icon" />
            <div className="badge">
              {inCart.reduce((acc, item) => (acc += item.amount), 0)}
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/favs"
          className={(navData) => (navData.isActive ? "active-icon" : "")}
        >
          <div className="indicator-container">
            <FiHeart className="heart-icon" />
            <div className="badge">{inFavs.length}</div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
