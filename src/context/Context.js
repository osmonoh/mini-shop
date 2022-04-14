import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(sessionStorage.getItem("product")) || {}
  );

  return (
    <MyContext.Provider value={{ product, setProduct }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
