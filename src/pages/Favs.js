import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { MyContext } from "../context/MyContext";

const Favs = () => {
  const { inFavs, setInFavs } = useContext(MyContext);

  const onRemoveClick = (product) => {
    setInFavs(inFavs.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("inFavsMini", JSON.stringify(inFavs));
  }, [inFavs]);

  return (
    <div className="favs center-box">
      {inFavs.length ? (
        inFavs.map((item) => {
          return (
            <ProductCard
              item={item}
              isFav={true}
              onRemoveClick={onRemoveClick}
              key={item.id}
            />
          );
        })
      ) : (
        <div className="favs-empty ">
          <h2 className="favs-empty-heading">Your wishlist is empty!</h2>
          <Link to="/shop" className="favs-empty-btn">
            Back to shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favs;
