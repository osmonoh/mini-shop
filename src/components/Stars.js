import React from "react";

import { AiFillStar } from "react-icons/ai";

const Stars = ({ stars }) => {
  const renderStars = (stars = 5) => {
    return [...new Array(stars)].map((item, i) => (
      <AiFillStar className="star" key={i} />
    ));
  };

  return <div className="stars">{renderStars(stars)}</div>;
};

export default Stars;
