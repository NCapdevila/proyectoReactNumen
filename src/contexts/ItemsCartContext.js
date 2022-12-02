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
    const [update, setUpdate] = useState(false)
    /*const [finalquant, setFinalQuant] = useState(finalquantity);
    const initialprice = price*finalquant
    const [finalprice, setFinalPrice] = useState(initialprice);

    const handlerAddQuantity = (id) =>{

      if(finalquant < quantity){
        setFinalQuant(finalquant+1);
        setFinalPrice(finalprice + price)
      }
      const dataprice={
        finalprice,
        finalquant
      }
      setItemsData([...itemsdata, dataprice])
    }

    const handlerSubstractQuantity = (id) =>{
      if(finalquant>1){
        setFinalQuant(finalquant-1);
        setFinalPrice(((finalprice*100)- (price*100))/100)
      }
      const dataprice={
        finalprice,
        finalquant
      }
      setItemsData([...itemsdata, dataprice])


      HACER FOREACH PARA COMPLETAR
    }*/

    useEffect(() =>{
        localStorage.setItem("itemsprueba", JSON.stringify(itemsdata))
    }, [itemsdata])
    
    const agregaritem =  (items, finalquantity, finalprice) =>{
      const istrue = itemsdata.filter(item => item.id === items.id)
      if(istrue.length > 0){
        return alert('Ya agregaste este item al producto anteriormente');
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

    const updateItem = (id, finalprice, finalquant) =>{
      const foundindex = itemsdata.findIndex(todo => {
        return todo.id === id;
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
          updateItem
          }}>
          {children}
        </userItemContext.Provider>
    )
}

export default ItemsCartContext;