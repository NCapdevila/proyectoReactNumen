import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../Modal_Carshop/Modal_Carshop';

const initialError = { isError: false, message: '' };

function ModalAgregar({ item }) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(initialError);
  
  const AgregrarItemCart = () =>{
    try{
      
      const addItem = async () =>{
        const url = `${BASE_URL}/itemsCart`;
        const res = await axios.post(url, item);
        /*console.log(res)*/
      }
      addItem();
    }
      catch (e){
        setError({
          isError : true,
          message: "Este Producto ya fue añadido",
        })
      }
    
    
    
  }
  
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Comprar
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Prueba carga del Carrito
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{item.brand}</p>
          <p>{`Precio del producto :${item.price}`}</p>
          <p>{item.offer && `Precio con descuento :${Math.round(((100-item.offerNumber) * item.price) / 100)}`}</p>
          <p>{item.offer}</p>
          <Button onClick={AgregrarItemCart}>Agregar al carrito</Button>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAgregar;