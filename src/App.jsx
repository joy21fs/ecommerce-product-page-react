import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Product from "./components/Product/Product";
import Pricing from "./components/Pricing/Pricing";
import LightBox from "./components/Gallery/LightBox";
import deleteIcon from "./images/icon-delete.svg";
import thumnnailImg from "./images/image-product-1-thumbnail.jpg";

function App() {
  const product = {
    name: "Fall Limited Edition Sneakers",
    discountPrice: "125.00",
    discount: "50%",
    fullPrice: "250.00",
  };
  const [basketStatus, setBasketStatus] = useState(<p>Your cart is empty.</p>);
  const [itemsInBasket, setItemsInBasket] = useState(0);

  function updateCart(count) {
    setBasketStatus(
      <>
        <div className="grid basket-container">
          <img
            src={thumnnailImg}
            alt="item"
            className="product-img thumbnail"
          />
          <div className="flex product-details">
            <h1 className="product">{`${product.name.slice(0, 20)}...`}</h1>
            <h2 className="amount">
              {`$${product.discountPrice}x${count}=`}
              <span className="price">{`$${(
                product.discountPrice * count
              ).toFixed(2)}`}</span>
            </h2>
          </div>
          <img
            src={deleteIcon}
            alt="delete-icon"
            className="delete-icon"
            onClick={deleteItem}
          />
        </div>
        <button className="check-out-btn"></button>
      </>
    );

    setItemsInBasket(count);
  }

  function deleteItem() {
    setBasketStatus(<p>Your cart is empty.</p>);
    setItemsInBasket(0);
  }

  return (
    <>
      <Header
        basketStatus={basketStatus}
        updateCart={updateCart}
        itemsInBasket={itemsInBasket}
      />
      <Gallery />
      <Product product={product} />
      <Pricing
        product={product}
        basketStatus={basketStatus}
        updateCart={updateCart}
      />
      <LightBox />
    </>
  );
}

export default App;
