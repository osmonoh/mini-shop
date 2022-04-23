import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Favs = () => {
  const { inFavs, setInFavs } = useContext(MyContext);

  const onRemoveClick = (product) => {
    setInFavs(inFavs.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      FAVS
      {inFavs.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => onRemoveClick(item)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Favs;
