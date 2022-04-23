import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { inCart } = useContext(MyContext);

  return (
    <div>
      CART
      {inCart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
