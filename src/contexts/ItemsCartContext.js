import { createContext, useEffect, useState } from "react";
import userItemContext from './userItemContext'

export const itemsCartDataContext = createContext();
export function ItemsCartContext (props) {
    const {children} = props;

    const [itemsdata, setItemsData] = useState(() =>{
        let data = localStorage.getItem("itemsprueba");
        if(data){
            return JSON.parse(data)
        } else {
            return [];
        }
    })
    useEffect(() =>{
        localStorage.setItem("itemsprueba", JSON.stringify(itemsdata))
    }, [itemsdata])
    
    const agregaritem =  (items, finalquantity) =>{
      const istrue = itemsdata.filter(item => item.id === items.id)
      if(istrue.length > 0){
        return alert('Ya agregaste este item al producto anteriormente');
      }
          const itemsfinal = {
            ...items,
            quantityfinally : finalquantity
          }
            setItemsData([...itemsdata, itemsfinal])
    }

    const deleteItem = id =>{
      const filtreditems = itemsdata.filter(item => item.id !== id)
      setItemsData([...filtreditems]);

    }

    return (
        <userItemContext.Provider value={{
          itemsdata,
          agregaritem,
          deleteItem
          }}>
          {children}
        </userItemContext.Provider>
    )
}

export default ItemsCartContext;