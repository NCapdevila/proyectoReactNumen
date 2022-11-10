import React from "react";
import "./ShippingBanner.css";
import back from "./icons/back.svg";
import tag from "./icons/tag.svg";
import box from "./icons/box.svg";
import mobile from "./icons/mobile.svg";

function ShippingBanner() {
  return (
    <ul className="list-banner">
      <li className="item-banner">
        <div className="icon-container">
          <img src={back} alt="Devolución" className="icons" />
        </div>
        <div className="container">
          <h2 className="tite-banner">DEVOLUCIÓN GRATIS</h2>
          <p className="paragraph-banner">HASTA 72HS</p>
        </div>
      </li>
      <li className="item-banner">
        <div className="icon-container">
          <img src={tag} alt="Usado" className="icons" />
        </div>
        <div className="container">
          <h2 className="tite-banner">USADO COMO NUEVO</h2>
          <p className="paragraph-banner">EN PERFECTO ESTADO</p>
        </div>
      </li>
      <li className="item-banner">
      <div className="icon-container">
          <img src={box} alt="Usado" className="icons" />
        </div>
        <div className="container">
          <h2 className="tite-banner">ENVÍOS A TODO EL PAÍS</h2>
          <p className="paragraph-banner">EN MENOS DE 72HS</p>
        </div>
      </li>
      <li className="item-banner">
      <div className="icon-container">
          <img src={mobile} alt="Usado" className="icons" />
        </div>
        <div className="container">
          <h2 className="tite-banner">DESCARGÁ LA APP</h2>
          <p className="paragraph-banner">IOS & ANDROID</p>
        </div>
      </li>
    </ul>
  );
}

export default ShippingBanner;
