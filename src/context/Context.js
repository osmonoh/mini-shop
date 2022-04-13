import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  const [product, setProduct] = useState({});

  return (
    <MyContext.Provider value={{ product, setProduct }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
