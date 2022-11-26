import React, { useState } from 'react'
import './ModalStyle.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';

function Modal({ open, onClose, products }) {

  const [quantity, setQuantity] = useState(1)
  
  const AgregrarItemCart = () =>{
    
      
      const addItem = async () =>{
        const url = 'http://localhost:9000/itemsCart';
        const res = await axios.post(url, products);
        console.log(res)
      }
      addItem();
    }
      
      
    
    
    
  

  return (open) && (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer">
        <div className='imagen_modal'>
          <img src={`../images/${products.imageRoot}.jpg`} alt="" />
        </div>
        {console.log(products)}



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
            <button onClick={AgregrarItemCart}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal