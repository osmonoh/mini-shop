import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(sessionStorage.getItem("productMini")) || {}
  );
  const [inCart, setInCart] = useState(
    JSON.parse(localStorage.getItem("inCartMini")) || []
  );
  const [inFavs, setInFavs] = useState(
    JSON.parse(localStorage.getItem("inFavsMini")) || []
  );

  return (
    <MyContext.Provider
      value={{ product, setProduct, inCart, setInCart, inFavs, setInFavs }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
