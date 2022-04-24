import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { inCart, setInCart, setProduct } = useContext(MyContext);

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

  useEffect(() => {
    localStorage.setItem("inCartMini", JSON.stringify(inCart));
  }, [inCart]);

  console.log(inCart);

  return (
    <div>
      {inCart.length ? (
        <div className="cart center-box">
          <div className="cart-list">
            {inCart.map((item) => (
              <div className="cart-list-item" key={item.id}>
                <Link
                  to={`/product/${item.id}`}
                  className="cart-list-item-image"
                  onClick={() => {
                    sessionStorage.setItem("productMini", JSON.stringify(item));
                    setProduct(item);
                  }}
                >
                  <img src={item.img} alt={item.name} />
                </Link>
                <div className="cart-list-item-content">
                  <div className="firstline">
                    <p>{item.name}</p>
                    <p>&euro; {item.price}</p>
                  </div>
                  <div className="lastline">
                    <div className="lastline-left">
                      <AiFillMinusCircle
                        className="btn-change"
                        onClick={() => onMinusClick(item)}
                      />
                      <p>{item.amount}</p>
                      <AiFillPlusCircle
                        className="btn-change"
                        onClick={() => onPlusClick(item)}
                      />
                    </div>
                    <div className="lastline-right">
                      <MdDelete onClick={() => onRemoveClick(item)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <p className="cart-total-amount">
              <span>Amount</span>
              <span>
                {inCart.reduce((acc, item) => (acc += item.amount), 0)}
              </span>
            </p>
            <p className="cart-total-total">
              <span>Total</span>
              <span>
                &euro;{" "}
                {inCart.reduce(
                  (acc, item) => (acc += item.price * item.amount),
                  0
                )}
              </span>
            </p>
            <p className="cart-total-disclaimer">
              *This total does not include delivery costs
            </p>
            <div className="cart-total-btn">Check out</div>
          </div>
        </div>
      ) : (
        <div className="cart-empty center-box">
          <h2 className="cart-empty-heading">Your cart is empty!</h2>
          <Link to="/shop" className="cart-empty-btn">
            Back to shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
