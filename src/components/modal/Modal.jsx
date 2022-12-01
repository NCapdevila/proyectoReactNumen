import React, { useState } from 'react'
import './ModalStyle.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';
import { useEffect } from 'react';




function Modal({ open, onClose, products, agregaritems }) {

  const initialState =  products.offer ? (products.price - (products.price * (products.offerNumber / 100))) : products.price
  const [quantity, setQuantity] = useState(1)
  const [finalPrice, setFinalPrice] = useState(initialState);
  console.log(initialState)
    const handlerQuantityLess = () =>{
      handlerFinalPrice()
      setQuantity(
        (quantity > 1) ? quantity - 1 : 1
     )
    }

    const handlerQuantityAdd = () =>{
      handlerFinalPrice()
      setQuantity(
        (quantity < products.quantity) ? quantity + 1 : products.quantity
      )
    }

    const handlerFinalPrice = () =>{
      if(products.offer){
        setFinalPrice(quantity * (products.price - (products.price * (products.offerNumber / 100))))
      } else {
        setFinalPrice(quantity * products.price)
      }
    }
    /*useEffect(() =>(
      
      console.log(`cantidad: ${quantity} y precio final ${finalPrice}`)
    ), [quantity, finalPrice])*/
    
  return (open) && (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer">
        <div className='imagen_modal'>
          <img src={`../images/${products.imageRoot}.jpg`} alt="" />
        </div>


        <div className="modalRight">
          <div className="closeBtn" onClick={onClose}>
            <AiOutlineCloseCircle />
          </div>
          <div className="content">
            <h1>{products.type} {products.brand}</h1>
            {!products.offer ? <p>Precio Normal</p> : <p>Precio con Descuento</p>}
            <p>Disponibles: <b>{products.quantity}</b></p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" onClick={() => handlerQuantityLess()}>
              <span className="bold">-</span>
            </button>
            <div className='showQuantity'>
              <p>{quantity}</p>
            </div>
            <button className="btnOutline" onClick={() => handlerQuantityAdd()}>
              <span className='bold'>+</span>
            </button>
          </div>
          <div className="monto">
            {products.offer ?
              (<p className='monto_valor'>{
                quantity * (products.price - (products.price * (products.offerNumber / 100)))
                }</p>)
              : <p className='monto_valor'>$ {quantity * products.price}</p>}
          </div>
          <div className="modalRight_button">
            <button  className='modalBtn' onClick={() => agregaritems(products, quantity )}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal