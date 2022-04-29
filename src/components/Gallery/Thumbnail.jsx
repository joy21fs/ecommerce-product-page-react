import React from "react";
import product_1 from "../../images/image-product-1-thumbnail.jpg";
import product_2 from "../../images/image-product-2-thumbnail.jpg";
import product_3 from "../../images/image-product-3-thumbnail.jpg";
import product_4 from "../../images/image-product-4-thumbnail.jpg";

export default function ThumbNail(props) {
  const imgSrc = [product_1, product_2, product_3, product_4];

  return (
    <div className="flex thumbnails">
      {imgSrc.map((img, index) => (
        <picture
          key={index}
          data-active={index === 0 ? true : false}
          className="product-img thumbnail"
        >
          <img
            className="product-img thumbnail"
            data-active={index === 0 ? true : false}
            id={index}
            src={img}
            alt={img}
            onClick={(event) => props.showLightBox(event)}
          />
        </picture>
      ))}
    </div>
  );
}
