import React, { useState, useEffect } from 'react'
import './ModalStyle.css'
import { AiOutlineCloseCircle } from "react-icons/ai";



function Modal({ open, onClose, products }) {

  const [quantity, setQuantity] = useState(1)
  
 



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
            <button className="btnPrimary" onClick={() => setQuantity(
              (quantity > 1) ? quantity - 1 : 1
            )}>
              <span className="bold">-</span>
            </button>
            <div className='showQuantity'>
              <p>{quantity}</p>
            </div>
            <button className="btnOutline" onClick={() => setQuantity(
              (quantity < products.quantity) ? quantity + 1 : products.quantity
            )}>
              <span className='bold'>+</span>
            </button>
          </div>
          <div className="monto">
            {products.offer ?
              (<p className='monto_valor'>{quantity * (products.price - (products.price * (products.offerNumber / 100)))}</p>)
              : <p className='monto_valor'>$ {quantity * products.price}</p>}
          </div>
          <div className="modalRight_button">
            <button onClick={() => AgregarItemCart(products)}  className='modalBtn'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal