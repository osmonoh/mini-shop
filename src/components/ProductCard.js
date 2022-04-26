import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import Stars from "../components/Stars";

import { ImHeartBroken } from "react-icons/im";

const ProductCard = ({ item, isFav, onRemoveClick }) => {
  const { product, setProduct } = useContext(MyContext);

  return (
    <Link
      to={`/product/${item.id}`}
      className="shop-item"
      key={item.id}
      onClick={() => {
        sessionStorage.setItem("productMini", JSON.stringify(item));
        setProduct(item);
      }}
    >
      {isFav && (
        <ImHeartBroken
          className="remove-btn"
          onClick={(e) => {
            console.log("click");
            onRemoveClick(item);
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        />
      )}

      <div className="shop-item-img">
        <img src={item.img} alt={item.name} />
      </div>
      <h3 className="shop-item-name">{item.name}</h3>
      <Stars stars={item.star} />
      <p>&euro;{item.price}</p>
    </Link>
  );
};

export default ProductCard;
