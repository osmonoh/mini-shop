import React from "react";

const Footer = () => {
  return (
    <footer className="footer center-box">
      <div className="footer-links">
        <div className="footer-links-column customer">
          <h3>Customer service</h3>
          <a href="#">Contact Us</a>
          <a href="#">Returns</a>
          <a href="#">Online Store</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-links-column company">
          <h3>Company</h3>
          <a href="#">What We Do</a>
          <a href="#">Available Services</a>
          <a href="#">Latest Posts</a>
          <a href="#">FAQs</a>
        </div>
        <div className="footer-links-column social">
          <h3>Social media</h3>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Tumblr</a>
          <a href="#">Pinterest</a>
        </div>
        <div className="footer-links-column profile">
          <h3>Profile</h3>
          <a href="#">My Account</a>
          <a href="#">Checkout</a>
          <a href="#">Order Tracking</a>
          <a href="#">Help & Support</a>
        </div>
      </div>
      <div className="footer-copyright">&copy; 2022 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
