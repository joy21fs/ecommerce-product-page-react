import React from "react";
import menu from "../../images/icon-menu.svg";
import closeIcon from "../../images/icon-close.svg";
import useWindowWidth from "../../useWindowWidth";

export default function Nav() {
  const width = useWindowWidth();

  function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
  }
  return (
    <>
      {width < 848 && <img src={menu} alt="menu" onClick={toggleMenu} />}
      <nav>
        {width < 848 && (
          <img
            className="close-icon"
            src={closeIcon}
            alt="close-icon"
            onClick={toggleMenu}
          />
        )}
        <ul className="flex">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
