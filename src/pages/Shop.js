import React from "react";
import ProductCard from "../components/ProductCard";

import products from "../data/products.js";

const Shop = () => {
  const renderProductCards = () => {
    return products.map((item) => <ProductCard item={item} key={item.id} />);
  };

  return <div className="shop center-box">{renderProductCards()}</div>;
};

export default Shop;
