import React from "react";

export default function Carousel(props) {
  const imgSrc = props.imgSrc;
  const activeIndex = props.activeIndex;

  return (
    <div className="carousel">
      <div
        className="inner flex"
        style={{ transform: `translateX(${activeIndex * -100}%)` }}
      >
        {imgSrc.map((img) => (
          <img className="product-img" src={img} alt={img} />
        ))}
      </div>
    </div>
  );
}
