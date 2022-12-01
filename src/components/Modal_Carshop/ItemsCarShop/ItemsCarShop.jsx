import { useState } from "react";
import { useEffect } from "react";
import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {

  const data = JSON.parse(localStorage.getItem("itemsprueba"))
  const [isDelete, setIsDelete] = useState(false);
  const deleteData = (id) =>{
    const newData = data.filter(item => item.id !== id)
    localStorage.setItem("itemsprueba", JSON.stringify(newData))
    setIsDelete(!isDelete);
  }

  
  useEffect(() =>{
    const data = JSON.parse(localStorage.getItem("itemsprueba"))
  }, [isDelete])

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
            deleteData={deleteData}
            />
          ))
          
        }
      </div>
    </div>
  );
};

export default ItemsCarShop;
