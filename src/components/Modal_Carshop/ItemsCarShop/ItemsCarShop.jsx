import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import userItemContext from "../../../contexts/userItemContext";
import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {

const {itemsdata : data, update ,  deleteItem: deleteData, updateItem} = useContext(userItemContext);


  return (
    <div>
      <div>
        {
          data.map(data =>(
            <ItemCart 
            name={data.user}
            brand={data.brand}
            price={data.price}
            quantity={data.quantity}
            finalquantity={data.quantityfinally}
            id={data.id}
            offer={data.offer}
            offerdiscount={data.offerNumber}
            deleteData={deleteData}
            updateItem={updateItem}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ItemsCarShop;
