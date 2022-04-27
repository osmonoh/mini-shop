import React from "react";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaGooglePlusG,
  FaUserCircle,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact center-box">
      <div className="contact-message">
        <h2>Contact us</h2>
        <form
          className="contact-message-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group">
            <FaUserCircle className="user-icon" />
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <FaUserCircle className="user-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button className="btn-submit" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="contact-details">
        <h3>Location</h3>
        <address>
          <p>19 Mervan Road</p>
          <p>London, UK</p>
          <p>SW2 1DP</p>
        </address>
        <h3>Follow us</h3>
        <div className="contact-details-social">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaGooglePlusG />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
