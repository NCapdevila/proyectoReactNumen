import { createContext, useEffect, useState } from "react";
import userItemContext from './userItemContext'



export const itemsCartDataContext = createContext();
export function ItemsCartContext (props) {
    const {children} = props;

    const [itemsdata, setItemsData] = useState(() =>{
        let data = localStorage.getItem("itemscart");
        if(data){
            return JSON.parse(data)
        } else {
            return [];
        }
    })
    const [update, setUpdate] = useState(false)

    useEffect(() =>{
        localStorage.setItem("itemscart", JSON.stringify(itemsdata))
    }, [itemsdata])
    
    const agregaritem =  (items, finalquantity, finalprice) =>{
      const istrue = itemsdata.filter(item => item.id === items.id)
      if(istrue.length > 0){
        return 0;
      }
          const itemsfinal = {
            ...items,
            quantityfinally : finalquantity,
            finalprice
          }
          
            setItemsData([...itemsdata, itemsfinal])

    }

    const deleteItem = id =>{
      const filtreditems = itemsdata.filter(item => item.id !== id)
      setItemsData([...filtreditems]);

    }
    const updatecart = () =>{
      setItemsData([]);
    }
    const updateItem = (id, finalprice, finalquant) =>{
      const foundindex = itemsdata.findIndex(item => {
        return item.id === id;
      })
      itemsdata[foundindex]["finalprice"] = finalprice 
      itemsdata[foundindex]["quantityfinally"] = finalquant 
      setUpdate(!update)
      setItemsData([...itemsdata]);
    }

    return (
        <userItemContext.Provider value={{
          itemsdata,
          update,
          agregaritem,
          deleteItem,
          updateItem,
          updatecart
          }}>
          {children}
        </userItemContext.Provider>
    )
}

export default ItemsCartContext;