import React from "react";
import "./Header.css";
import Nav from "./Nav";
import cart from "../../images/icon-cart.svg";
import user from "../../images/image-avatar.png";
import Cart from "./Cart";

export default function Header(props) {
  const itemsInBasket = props.itemsInBasket;

  function showBasket() {
    document.querySelector(".cart-container").classList.toggle("show");
  }

  const style =
    itemsInBasket === 0 ? { display: "none" } : { display: "inherit" };

  return (
    <header className="wrapper flex">
      <Nav />
      <h1>sneakers</h1>
      <picture className="cart-icon flex">
        <span style={style} className="items-in-basket">
          {itemsInBasket}
        </span>
        <img className="cart-icon" src={cart} alt="cart" onClick={showBasket} />
      </picture>

      <Cart basketStatus={props.basketStatus} />
      <img className="user-img" src={user} alt="user" />
    </header>
  );
}
