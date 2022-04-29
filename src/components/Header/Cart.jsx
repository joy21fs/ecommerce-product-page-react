import React from "react";
import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="cart-container wrapper grid">
      <header>
        <h1>Cart</h1>
      </header>
      <div className="basket flex">{props.basketStatus}</div>
    </div>
  );
}
