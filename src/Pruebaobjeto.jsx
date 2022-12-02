import { useEffect } from "react";
import { useState } from "react";


const Pruebaobjeto = () =>{
    const data = JSON.parse(localStorage.getItem("datosTraidos"));


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

    return(
        <div style={{
        position: "absolute",
        padding: 40,
        backgroundColor: "red",
        zIndex: 400,
        border: "1px solid black"
        }}>
        {data.map(items =>(
          <div style={{        border: "1px solid black"}}>
                  <p>{items.user}</p>
                  <p>{items.id}</p>
                  <p>{items.price}</p>
                  <p>{items.brand}</p>
                  <p>{items.quantity}</p>
            <button onClick={() => agregaritem(items)}>Agregar item</button>
          </div>
        ))}   
    </div>
    )
}

export default Pruebaobjeto;