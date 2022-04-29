import React from "react";

export default function CarouselBtn(props) {
  return (
    <button
      className={`carousel-btn ${props.name}`}
      onClick={(event) => props.handleClick(event)}
    ></button>
  );
}
