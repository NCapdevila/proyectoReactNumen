import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import './CardContainerStyle.css';
import Header from './header/Header';
import axios from 'axios';
import { SpinnerDotted } from 'spinners-react'
import { useContext } from 'react';
import userItemContext from '../../contexts/userItemContext';





const CardContainer = (props) => {

  /* En products guardare los datos del db.json */
  const [products, setProducts] = useState([])
  /* isLoading es un icono de espera hasta que se obtenga los datos del Json */
  const [isLoading, setIsLoading] = useState(false);

  const {agregaritem} = useContext(userItemContext)

 




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




  const headerContainer = 'Productos destacados';

  return (
    <>

      <Header title={headerContainer} />
      {isLoading ?
        <div className='spinner'>
          <SpinnerDotted />
          <p style={{fontSize : "3rem"}}>Cargando...</p>
        </div>
        :
        <div className='cardContainer'>
          {products.map((product, key) =>
            <div key={key}>
              <Card sale={product}  agregaritems={agregaritem} />
            </div>
          )}
        </div>}
    </>

  )

}

export default CardContainer;