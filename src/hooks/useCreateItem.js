import { useEffect, useState } from "react";

const useCreateItem = (items) =>{

    
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
    
const agregaritem =  items =>{
        const valores = {
    name : items.user,
    id: items.id,
    brands: items.brand
} 
    setItemsData([...itemsdata, valores])
}
    
    
}
