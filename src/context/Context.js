import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(sessionStorage.getItem("product")) || {}
  );
  const [inCart, setInCart] = useState([]);

  return (
    <MyContext.Provider value={{ product, setProduct, inCart, setInCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
