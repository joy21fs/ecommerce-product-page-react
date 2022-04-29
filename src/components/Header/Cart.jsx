import React from "react";
import "./Cart.css";

export default function Cart(props) {
  return (
    <div className="cart-container wrapper grid">
      <h1>Cart</h1>
      <div className="basket flex">{props.basketStatus}</div>
    </div>
  );
}
