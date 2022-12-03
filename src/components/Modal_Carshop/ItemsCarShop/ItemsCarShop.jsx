
import { useContext } from "react";
import userItemContext from "../../../contexts/userItemContext";
import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {

const {itemsdata : data , deleteItem: deleteData, updateItem} = useContext(userItemContext);


  return (
    <div>
      <div>
        {
          data.map(data =>(
            <ItemCart 
            name={data.user}
            img={data.imageRoot}
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
