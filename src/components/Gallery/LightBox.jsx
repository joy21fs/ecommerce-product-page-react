import React from "react";
import Gallery from "./Gallery";
import "./Gallery.css";
import "./LightBox.css";

export default function LightBox() {
  return (
    <div className="lightbox flex">
      <div className="wrapper flex">
        <Gallery />
      </div>
    </div>
  );
}
