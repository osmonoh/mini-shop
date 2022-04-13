import React from "react";
import { Link } from "react-router-dom";

import Stars from "../components/Stars";

import products from "../data/products.js";

const Shop = () => {
  return (
    <div className="shop center-box">
      {products.map((item) => {
        return (
          <Link to="/" className="shop-item" key={item.id}>
            <div className="shop-item-img">
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className="shop-item-name">{item.name}</h3>
            <Stars stars={item.star} />
            <p>&euro;{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Shop;
