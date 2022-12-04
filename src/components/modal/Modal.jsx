import React, { useState } from "react";
import "./ModalStyle.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import userItemContext from "../../contexts/userItemContext";
import Button from "../Footer/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";


function Modal({ open, onClose, products, agregaritems }) {
  let { offer, offerNumber, price } = products;
  price = offer ? price - price * (offerNumber / 100) : price;
  //const initialState =  products.offer ? (products.price - (products.price * (products.offerNumber / 100))) : products.price
  const [finalquant, setFinalQuant] = useState(1);
  const initialprice = price * finalquant;
  const [finalprice, setFinalPrice] = useState(initialprice);
  const [showItemExists, setShowItemExists] = useState(false);
  const [itemnotexists, setItemNotExists] = useState(false);
  const { itemsdata } = useContext(userItemContext);
  const [fixed, setFixed] = useState(false);

  const setFix = () =>{
    if(window.scrollY >= 1){
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", setFix);
  const handlerAddQuantity = () => {
    if (finalquant < products.quantity) {
      setFinalQuant(finalquant + 1);
      setFinalPrice(finalprice + price);
    }
  };
  const handlerSubstractQuantity = () => {
    if (finalquant > 1) {
      setFinalQuant(finalquant - 1);
      setFinalPrice((finalprice * 100 - price * 100) / 100);
    }
  };

  const handlerAddItem = () =>{
    agregaritems(products, finalquant, finalprice);
    const istrue = itemsdata.filter(item => item.id === products.id)
    if(istrue.length > 0){
      setItemNotExists(false)
      setShowItemExists(true)

    }
    else {
      setItemNotExists(true)
      setShowItemExists(false)
    }
  }
  const handlershowitem = () =>{
    setItemNotExists(false)
    setShowItemExists(false)
  }


  return (
    open && (
      <div onClick={onClose} className={`${fixed ? 'overlay' : 'overlay fixed'}`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="imagen_modal">
            <img src={`../images/${products.imageRoot}.jpg`} alt="" />
          </div>

          <div className="modalRight">
            <div className="closeBtn" onClick={onClose}>
              <AiOutlineCloseCircle />
            </div>
            <div className="content">
              <h1>
                {products.type} {products.brand}
              </h1>
              {!products.offer ? (
                <p>Precio Normal</p>
              ) : (
                <p>Precio con Descuento</p>
              )}
              <p>
                Disponibles: <b>{products.quantity}</b>
              </p>
            </div>
            <div className="btnContainer">
              <button
                className="btnPrimary"
                onClick={() => handlerSubstractQuantity()}
              >
                <span className="bold">-</span>
              </button>
              <div className="showQuantity">
                <p>{finalquant}</p>
              </div>
              <button
                className="btnOutline"
                onClick={() => handlerAddQuantity()}
              >
                <span className="bold">+</span>
              </button>
            </div>
            <div className="monto">
              {products.offer ? (
                <p className="monto_valor">
                  {" "}
                  $
                  {
                    //quantity * (products.price - (products.price * (products.offerNumber / 100)))
                    finalprice
                  }
                </p>
              ) : (
                <p className="monto_valor">$ {finalprice}</p>
              )}
            </div>
            <div className="modalRight_button">
              <button
                className="modalBtn"
                onClick={() => handlerAddItem()}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        <div onClick={() => handlershowitem()} className={`showitemexists${showItemExists ? 'active':'closed'}`}>
          <div>
            <div  className="infoitemexist">  
              <FontAwesomeIcon
                  icon={faXmarkCircle}
                  className="checkconfirm errorconfirm"
                />
                <p className="text-confirm">El producto ya fue agregado al carrito</p></div>
          </div>
          <Button style='btn-vos' text='Aceptar' />
        </div>
        <div onClick={() => handlershowitem()} className={`shownotexists${itemnotexists ? 'active':'closed'}`}>
          <div className="infoitemexist">
          <FontAwesomeIcon icon={faCheckCircle} className="checkconfirm" />
              <p className="text-confirm">Se agrego el producto al carrito</p>
          </div>
          <div className="button_exists">
          <Button style='btn-vos' className="pruebadsa" text='Aceptar' />
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
