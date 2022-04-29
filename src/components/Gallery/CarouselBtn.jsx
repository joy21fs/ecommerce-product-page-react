import React from "react";

export default function CarouselBtn(props) {
  return (
    <button
      className={`carousel-btn ${props.name}`}
      onClick={(event) => props.handleClick(event)}
    >
      <span className="sr-only">{props.name}</span>
    </button>
  );
}
