import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

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
    <div className="cart center-box">
      <div className="cart-list">
        {inCart.map((item) => (
          <div className="cart-list-item" key={item.id}>
            <div className="cart-list-item-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="cart-list-item-content">
              <div className="firstline">
                <p>{item.name}</p>
                <p>&euro;{item.price}</p>
              </div>
              <div className="lastline">
                <div className="lastline-left">
                  {/* <button
                    className="btn-change"
                    onClick={() => onMinusClick(item)}
                  >
                  </button> */}
                  <AiFillMinusCircle
                    className="btn-change"
                    onClick={() => onMinusClick(item)}
                  />
                  <p>{item.amount}</p>
                  {/* <button
                    className="btn-change"
                    onClick={() => onPlusClick(item)}
                  >
                  </button> */}
                  <AiFillPlusCircle
                    className="btn-change"
                    onClick={() => onPlusClick(item)}
                  />
                </div>
                <div className="lastline-right">
                  {/* <button onClick={() => onRemoveClick(item)}>remove</button> */}
                  <MdDelete onClick={() => onRemoveClick(item)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total"></div>
    </div>
  );
};

export default Cart;
