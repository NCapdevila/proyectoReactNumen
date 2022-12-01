import React, { useState } from 'react'
import Modal from './Modal';
import './ModalStyle.css'

function ModalIndex(props) {
  const [openModal, setOpenModal] = useState(false);
  

  
  return (
    <div>
      
      <button className='modalBtn' onClick={() => {
        setOpenModal(true)
      }}>Comprar</button>
      <Modal agregaritems={props.agregaritems}  open={openModal} onClose={() => setOpenModal(!openModal)} products={props.products} />
    </div>
  );
}

export default ModalIndex
