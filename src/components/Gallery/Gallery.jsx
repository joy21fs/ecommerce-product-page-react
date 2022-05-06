import React, { useState } from "react";
import useWindowWidth from "../../useWindowWidth";
import "./Gallery.css";
import CarouselBtn from "./CarouselBtn";
import Carousel from "./Carousel";
import Thumbnail from "./Thumbnail";
import product_1 from "../../images/image-product-1.jpg";
import product_2 from "../../images/image-product-2.jpg";
import product_3 from "../../images/image-product-3.jpg";
import product_4 from "../../images/image-product-4.jpg";

export default function Gallery() {
  const width = useWindowWidth();
  const imgSrc = [product_1, product_2, product_3, product_4];
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnails = [...document.querySelectorAll(".thumbnail")];

  function handleClick(event) {
    event.target.className.includes("previous-icon")
      ? setActiveIndex((prevActiveIndex) =>
          prevActiveIndex === 0
            ? (prevActiveIndex = imgSrc.length - 1)
            : prevActiveIndex - 1
        )
      : setActiveIndex((prevActiveIndex) =>
          prevActiveIndex === 3 ? (prevActiveIndex = 0) : prevActiveIndex + 1
        );
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.id == activeIndex
      ? thumbnail.setAttribute("data-active", true)
      : thumbnail.setAttribute("data-active", false);
  });

  function closeLightBox() {
    document.querySelector(".lightbox").classList.remove("show");
  }

  function showLightBox(event) {
    setActiveIndex(event.target.id);
    document.querySelector(".lightbox").classList.add("show");
  }

  return (
    <section className="gallery flex">
      {width > 848 && (
        <button class="close-btn" onClick={closeLightBox}>
          <span className="sr-only">close</span>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      )}
      <CarouselBtn name="previous-icon" handleClick={handleClick} />

      <Carousel activeIndex={activeIndex} imgSrc={imgSrc} />

      <CarouselBtn name="next-icon" handleClick={handleClick} />

      {width > 848 && <Thumbnail showLightBox={showLightBox} />}
    </section>
  );
}
