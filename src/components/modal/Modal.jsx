import React, { useState} from 'react'
import './ModalStyle.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


function Modal({ open, onClose, products, agregaritems }) {
  let {offer, offerNumber, price} = products
  price = offer ? (price - (price*(offerNumber/100))) : price;
  //const initialState =  products.offer ? (products.price - (products.price * (products.offerNumber / 100))) : products.price
  const [finalquant, setFinalQuant] = useState(1);
  const initialprice = price*finalquant;
  const [finalprice, setFinalPrice] = useState(initialprice);
  const handlerAddQuantity = () =>{
    if(finalquant < products.quantity){
      setFinalQuant(finalquant+1);
      setFinalPrice(finalprice + price)
    }

  }
  const handlerSubstractQuantity = () =>{
    if(finalquant>1){
      setFinalQuant(finalquant-1);
      setFinalPrice(((finalprice*100)- (price*100))/100)
    }
  }
  //console.log(`finalquant ${quantity}`)

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
            <button className="btnPrimary" onClick={() => handlerSubstractQuantity()}>
              <span className="bold">-</span>
            </button>
            <div className='showQuantity'>
              <p>{finalquant}</p>
            </div>
            <button className="btnOutline" onClick={() => handlerAddQuantity()}>
              <span className='bold'>+</span>
            </button>
          </div>
          <div className="monto">
            {products.offer ?
              (<p className='monto_valor'> ${
                //quantity * (products.price - (products.price * (products.offerNumber / 100)))
                finalprice
                }</p>)
              : <p className='monto_valor'>$ {finalprice}</p>}
          </div>
          <div className="modalRight_button">
            <button  className='modalBtn' onClick={() => agregaritems(products, finalquant, finalprice )}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal