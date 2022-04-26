import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blogSlides from "../data/blogSlides";
import blogPosts from "../data/blogPosts";

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // pauseOnHover: true,
  };

  return (
    <div className="blog center-box">
      <h2 className="blog-title">Mini living weekly</h2>
      <div className="blog-carousel">
        <Slider {...settings}>
          {blogSlides.map((item) => {
            return (
              <div className="blog-carousel-card" key={item.id}>
                <img src={item.image} alt={item.label} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="blog-articles">
        {blogPosts.map((item) => {
          return (
            <article className="article" key={item.id}>
              <div className="article-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="article-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="#" className="article-text-link">
                  Read more
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
