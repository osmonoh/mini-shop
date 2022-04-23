import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { inCart, setInCart } = useContext(MyContext);

  const onMinusClick = (product) => {
    setInCart(
      inCart.map((el) => {
        if (el.id === product.id && el.amount > 1) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      })
    );
  };

  const onPlusClick = (product) => {
    setInCart(
      inCart.map((el) => {
        if (el.id === product.id && el.amount < 10) {
          return { ...el, amount: el.amount + 1 };
        }
        return el;
      })
    );
  };

  const onRemoveClick = (product) => {
    setInCart(inCart.filter((el) => el.id !== product.id));
  };

  console.log(inCart);

  return (
    <div>
      CART
      {inCart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.amount}</p>
          <button onClick={() => onMinusClick(item)}>-</button>
          <button onClick={() => onPlusClick(item)}>+</button>
          <button onClick={() => onRemoveClick(item)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
