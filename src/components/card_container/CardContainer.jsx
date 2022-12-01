import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import './CardContainerStyle.css';
import Header from './header/Header';
import axios from 'axios';
import { SpinnerDotted } from 'spinners-react'


const CardContainer = (props) => {

  /* En products guardare los datos del db.json */
  const [products, setProducts] = useState([])
  /* isLoading es un icono de espera hasta que se obtenga los datos del Json */
  const [isLoading, setIsLoading] = useState(false);



 

  /* const [datosTraidos, setdatosTraidos] = useState(() =>{
   const guardarDatos = window.localStorage.getItem("datosCarro");
    if(guardarDatos){
      return JSON.parse(guardarDatos)
    } else {
      return [];
    }
  })

  useEffect(() =>{
    window.localStorage.setItem("datosCarro", datosTraidos)
  }, [datosTraidos])

  const addDatos = (datosTraidos) =>{
    setdatosTraidos([datosTraidos])
    
  }
  products.map(items => (addDatos(items)));
  */


  /* Aqui hago la llamada de los productos con Get y AXIOS */
  async function fetchProducts() {
    setIsLoading(true);
    const result = await axios.get('http://localhost:9000/products');
    setProducts(await result.data);
    setIsLoading(false);
  }

  localStorage.setItem("datosTraidos", JSON.stringify(products))

  useEffect(() => {
    fetchProducts();
  }, []);


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
        setItemsData([...itemsdata, items])
}

  const headerContainer = 'Productos destacados';

  return (
    <>

      <Header title={headerContainer} />
      {isLoading ?
        <div className='spinner'>
          <SpinnerDotted />
          <p>Cargando...</p>
        </div>
        :
        <div className='cardContainer'>
          {products.map((product, key) =>
            <div key={key}>
              <Card sale={product} agregaritems={agregaritem} />
            </div>
          )}
        </div>}
    </>

  )

}

export default CardContainer;