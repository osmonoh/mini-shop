import React from "react";

import table1 from "../images/table1.jpeg";
import pot1 from "../images/pot1.jpeg";
import pot2 from "../images/pot2.jpeg";

const Home = () => {
  return (
    <div className="home center-box">
      <div className="hero">
        <div className="hero-gallery">
          <div className="hero-gallery-tile">
            <img src={table1} alt="table" />
          </div>
          <div className="hero-gallery-tile">
            <img src={pot1} alt="pot" />
          </div>
          <div className="hero-gallery-tile">
            <img src={pot2} alt="pot" />
          </div>
        </div>
        <div className="hero-text">
          <h2>Home Decoration</h2>
          <p>
            Want to reinvent the look and feel of your home? Whatever style
            you’re going for, our edit is here to help you fall head over heels
            with staying at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
