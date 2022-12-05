import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const ItemCart = (props) => {

    const {name, brand, quantity, id, deleteData, finalquantity,  offer, offerdiscount, updateItem, img } = props
    let {price } = props;
    price = offer ? (price - (price*(offerdiscount/100))) : price;
    const [finalquant, setFinalQuant] = useState(finalquantity);
    const initialprice = price*finalquant
    const [finalprice, setFinalPrice] = useState(initialprice);


    useEffect(() =>{
      updateItem(id, finalprice, finalquant);
    }, [finalprice])
    const handlerAddQuantity = () =>{
      if(finalquant < quantity){
        
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
    
  return (
    <div className="modalBodyCar__container">
      <div className="modalBodyImg__container">
      <img src={`../images/${img}.jpg`} className='ImageCard' alt="Ropa de Marca" />
      </div>
      <div className="itemName namecontainer">
        <span className="nameItem__container">{name} {brand}</span>
      </div>
      <div className="totalItems totalitemscontainer">
        <span className="totalItemsTitle">Cantidad:</span>
        <div className="changeTotalItems">
          <button className="buttontotalItems buttonitem-1" onClick={() => handlerSubstractQuantity()}>-</button>
          <div className="numberItems">{finalquant}</div>
          <button className="buttontotalItems buttonitem-2" onClick={() => handlerAddQuantity() }>+</button>
        </div>
      </div>
      <div className="priceItem totalpricecontainer">
        <span>${finalprice}</span>
      </div>
      <div className="itemsinfoMobile">
      <div className="itemName">
        <span className="nameItem__container">{name} {brand}</span>
      </div>
      <div className="totalItems">
        <span className="totalItemsTitle">Cantidad:</span>
        <div className="changeTotalItems">
          <button className="buttontotalItems buttonitem-1" onClick={() => handlerSubstractQuantity()}>-</button>
          <div className="numberItems">{finalquant}</div>
          <button className="buttontotalItems buttonitem-2" onClick={() => handlerAddQuantity() }>+</button>
        </div>
      </div>
      <div className="priceItem">
        <span>${finalprice}</span>
      </div>
      <div className="deleteItem trashcontainer__mobile">
        <button onClick={() => deleteData(id)}>
          <FaTrashAlt />
        </button>
      </div>
      </div>
      <div className="deleteItem trashcontainer">
        <button onClick={() => deleteData(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;