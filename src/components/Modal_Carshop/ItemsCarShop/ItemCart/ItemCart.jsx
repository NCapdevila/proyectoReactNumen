import { FaTrashAlt } from "react-icons/fa";

const ItemCart = (props) => {
    const {name, brand, price, quantity, finalquantity, id, deleteData } = props
  
  return (
    <div className="modalBodyCar__container">
      <div className="modalBodyImg__container">
      </div>
      <div className="itemName">
        <span className="nameItem__container">{name} {brand}</span>
      </div>
      <div className="totalItems">
        <span className="totalItemsTitle">Cantidad:</span>
        <div className="changeTotalItems">
          <button className="buttontotalItems buttonitem-1">-</button>
          <div className="numberItems">{finalquantity}</div>
          <button className="buttontotalItems buttonitem-2">+</button>
        </div>
      </div>
      <div className="priceItem">
        <span>${price}</span>
      </div>
      <div className="deleteItem">
        <button onClick={() => deleteData(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;