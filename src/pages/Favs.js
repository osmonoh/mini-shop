import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { MyContext } from "../context/MyContext";

const Favs = () => {
  const { inFavs, setInFavs } = useContext(MyContext);

  const onRemoveClick = (product) => {
    setInFavs(inFavs.filter((item) => item.id !== product.id));
  };

  return (
    <div className="favs center-box">
      {inFavs.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Favs;
