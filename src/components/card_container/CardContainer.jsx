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

  /* Aqui hago la llamada de los productos con Get y AXIOS */
  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get('http://localhost:5000/products')
    setProducts(await result.data)
    setIsLoading(false);
  }

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
          <p>Cargando...</p>
        </div>
        :
        <div className='cardContainer'>
          {products.map((product, key) =>
            <div key={key}>
              <Card sale={product} />
            </div>
          )}
        </div>}
    </>

  )

}

export default CardContainer;