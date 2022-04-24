import React, { useContext, useEffect } from "react";
import Stars from "../components/Stars";
import { MyContext } from "../context/MyContext";

const Product = () => {
  const { product } = useContext(MyContext);
  const { id, img, name, price, star, description } = product;
  const { inCart, setInCart } = useContext(MyContext);
  const { inFavs, setInFavs } = useContext(MyContext);

  console.log(product);

  const onToCartClick = () => {
    if (inCart.some((item) => item.id === id)) {
      setInCart(
        inCart.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount + 1 };
          return item;
        })
      );
    } else {
      setInCart([...inCart, { ...product, amount: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("inCartMini", JSON.stringify(inCart));
  }, [inCart]);

  const onToFavsClick = () => {
    if (!inFavs.some((item) => item.id === id)) setInFavs([...inFavs, product]);
  };

  useEffect(() => {
    localStorage.setItem("inFavsMini", JSON.stringify(inFavs));
  }, [inFavs]);

  console.log(inFavs);

  return (
    <div className="product center-box">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-content">
        <h2>{name}</h2>
        <p className="price">&euro;{price}</p>
        <Stars stars={star} />
        <p className="description">{description}</p>
        <div className="product-buttons">
          <div className="product-btn to-cart-btn" onClick={onToCartClick}>
            add to cart
          </div>
          <div className="product-btn to-wish-btn" onClick={onToFavsClick}>
            add to wishlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
