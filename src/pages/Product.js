import React, { useContext } from "react";
import Stars from "../components/Stars";
import { MyContext } from "../context/MyContext";

const Product = () => {
  const { product } = useContext(MyContext);
  const { img, name, price, star, description } = product;

  return (
    <div className="product center-box">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-content">
        <h2>{name}</h2>
        <p className="price">&euro;{price}</p>
        <Stars stars={star} />
        <p className="description">{description}</p>
        <div className="product-buttons">
          <div className="product-btn to-cart-btn">add to cart</div>
          <div className="product-btn to-wish-btn">add to wishlist</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
