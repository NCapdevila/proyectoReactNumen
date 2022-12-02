
import {useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaShoppingCart } from "react-icons/fa";
import ItemsCarShop from "./ItemsCarShop/ItemsCarShop";
import "./Modal_Carshop.style.css";


function ModalCarShop() {
  const [lgShow, setLgShow] = useState(false);



  return (

    
    <>
      <Button className="carshop__button" onClick={() => setLgShow(true)}>
        <FaShoppingCart />
        
      </Button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className=""
      >
        <Modal.Header className="ModalHeaderCarShop" closeButton>
          <Modal.Title
            className="modalCarShopTitle"
            id="example-modal-sizes-title-lg"
          >
            Mi carro de compras
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_items_body">

        <ItemsCarShop/>

        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <div className="modal__footercontainer">
            <div className="totalprice__container">
              <div>Total: $24600</div>
            </div>
            <div className="buttonsCart__container">
              <div>
                <Button className='cancelButton' onClick={() => setLgShow(false)}>Cancelar</Button>{" "}
              </div>
              <div>
                <Button className='ButtonCart' variant="info" onClick={() => setLgShow(false)}>Continuar comprando</Button>{" "}
                <Button className='ButtonCart2' variant="dark" >Finalizar compra</Button>{" "}
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCarShop;
