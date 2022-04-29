import React, { useState } from "react";
import "./Pricing.css";

export default function Pricing(props) {
  const product = props.product;
  const [count, setCount] = useState(0);

  function updateCount(event) {
    event.target.id === "add-btn"
      ? setCount((prevCount) => prevCount + 1)
      : count !== 0 && setCount((prevCount) => prevCount - 1);
  }

  function addToCart(event) {
    event.preventDefault();
    props.updateCart(count);

    document.querySelector(".items-in-basket").innerHTML = count;
  }

  return (
    <section className="wrapper pricing grid">
      <h2 className="discount flex">
        {`$${product.discountPrice}`}
        <span>{product.discount}</span>
      </h2>
      <h3 className="full-price">{`$${product.fullPrice}`}</h3>
      <div className="amount flex">
        <button
          id="minus-btn"
          className="minus-btn"
          onClick={(event) => updateCount(event)}
        >
          <span className="sr-only">minus</span>
        </button>
        <span className="item-count">{count}</span>

        <button
          id="add-btn"
          className="add-btn"
          onClick={(event) => updateCount(event)}
        >
          <span className="sr-only">add</span>
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={(event) => addToCart(event)}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="hsl(25, 100%, 94%)"
            fill-rule="nonzero"
          />
        </svg>
        Add to cart
      </button>
    </section>
  );
}
