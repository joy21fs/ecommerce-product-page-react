import React from "react";
import "./Product.css";

export default function Product(props) {
  const product = props.product;
  return (
    <section className="wrapper product">
      <h1>
        <span className="uppercase">Sneaker Company</span>
        {product.name}
      </h1>

      <article>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </article>
    </section>
  );
}
