import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../data/reviews";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // pauseOnHover: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {reviews.map((item) => {
          return (
            <div className="carousel-card" key={item.id}>
              <div className="carousel-card-text">
                <p className="review">{item.text}</p>
                <h3>{item.name}</h3>
                <p>{item.job}</p>
              </div>
              <div className="carousel-card-image">
                <img src={item.image} alt="user photo" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
