import React from "react";
import Card from "react-bootstrap/Card";
import "./ShippingBanner.css";
import back from "./icons/back.svg";
import tag from "./icons/tag.svg";
import box from "./icons/box.svg";
import coin from "./icons/coin.svg";

function ShippingBanner() {
  return (
    <div className="containerbanner">
      <Card className="cardbanner">
        <Card.Img className="imgbanner" src={back} />
        <Card.Body className="bodybanner">
          <Card.Title className="titlebanner">DEVOLUCION GRATIS</Card.Title>
          <Card.Text className="textbanner">HASTA 72HS</Card.Text>
        </Card.Body>
      </Card>

      <Card className="cardbanner">
        <Card.Img className="imgbanner" src={tag} />
        <Card.Body className="bodybanner">
          <Card.Title className="titlebanner">USADO COMO NUEVO</Card.Title>
          <Card.Text className="textbanner">EN PERFECTO ESTADO</Card.Text>
        </Card.Body>
      </Card>

      <Card className="cardbanner">
        <Card.Img className="imgbanner" src={box} />
        <Card.Body className="bodybanner">
          <Card.Title className="titlebanner">ENVÍOS A TODO EL PAÍS</Card.Title>
          <Card.Text className="textbanner">EN MENOS DE 72HS</Card.Text>
        </Card.Body>
      </Card>

      <Card className="cardbanner">
        <Card.Img className="imgbanner" src={coin} />
        <Card.Body className="bodybanner">
          <Card.Title className="titlebanner">PRECIOS INCREÍBLES</Card.Title>
          <Card.Text className="textbanner">HASTA 80% OFF</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShippingBanner;
