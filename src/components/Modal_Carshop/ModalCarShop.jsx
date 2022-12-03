
import {useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaShoppingCart } from "react-icons/fa";
import userItemContext from "../../contexts/userItemContext";
import ItemsCarShop from "./ItemsCarShop/ItemsCarShop";
import "./Modal_Carshop.style.css";



function ModalCarShop() {
  const [lgShow, setLgShow] = useState(false);

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  
  const {itemsdata}=useContext(userItemContext)

  const {itemsdata : data} = useContext(userItemContext);
  let price = data.reduce((acc, item) =>{
    return acc = acc + item.finalprice
  }, 0);
  

const handlermodal = () =>{
  setLgShow(true)
  handleShow(values[3])
}
  return (

    
    <>
      <Button className="carshop__button carshop__button_mobile me-2 mb-2"
      key={3} onClick={() => handlermodal()}>
        <FaShoppingCart />
        <span className="items-amount">{itemsdata.length}</span>
      </Button>
      <Modal
        size="xl"
        show={lgShow}
        dialogClassName="modal-90w"
        fullscreen={fullscreen}
        onHide={() => setLgShow(false)}
        //aria-labelledby="example-modal-sizes-title-lg"
        aria-labelledby="example-custom-modal-styling-title"
        className="pruebaxd"
      >
        <Modal.Header className="ModalHeaderCarShop" closeButton>
          <Modal.Title
            className="modalCarShopTitle"
            id="example-modal-sizes-title-lg"
          >
            Mi carro de compras
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
        className="modal_items_body">

        <ItemsCarShop/>

        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <div className="modal__footercontainer">
            <div className="totalprice__container">
              <div>Total: ${price}</div>
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
