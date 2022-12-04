import {
  faCheckCircle,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaShoppingCart } from "react-icons/fa";
import userItemContext from "../../contexts/userItemContext";
import ItemsCarShop from "./ItemsCarShop/ItemsCarShop";
import "./Modal_Carshop.style.css";

function ModalCarShop() {
  const [lgShow, setLgShow] = useState(false);
  const BASE_URL = `http://localhost:9000/itemsCart`;
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [confirmedPurchase, setConfirmedPurchase] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }

  const { itemsdata, updatecart } = useContext(userItemContext);

  const { itemsdata: data } = useContext(userItemContext);
  let price = data.reduce((acc, item) => {
    return (acc = acc + item.finalprice);
  }, 0);

  const handlermodal = () => {
    setLgShow(true);
    handleShow(values[3]);
  };

  const sendinfoCart = async () => {
    if(itemsdata.length !== 0){
      try {
        /*if(itemsdata.length === 0){
          return alert("No agrego ningun producto");
        }*/
        let res = await axios.post(BASE_URL, itemsdata);
        if (res.status === 201) {
          setIsLoading(true);
        }
      } catch (e) {
        setIsLoading(true);
        setIsError(true);
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
        setTimeout(function () {
          if(itemsdata.length !== 0){
            setConfirmedPurchase(true)
          } else{
            setIsError(true);
          }
        }, 2000);
        localStorage.removeItem("itemscart");
        updatecart();
      }
    }
    
  };

  const handlerErrorPurchase = () => {
    setIsError(false);
    setConfirmedPurchase(false);
  };

  
  return (
    <>
      <Button
        className="carshop__button carshop__button_mobile me-2 mb-2"
        key={3}
        onClick={() => handlermodal()}
      >
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
        
      >
        {isError ? (
          isLoading ? (
            <div>
              <Modal.Body className="modal_items_body isloading__container">
                <div className="isloadingpurchase">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin spinner"
                  />
                  <p>Su compra esta siendo confirmada...</p>
                </div>
              </Modal.Body>
            </div>
          ) : (
            <>
              <Modal.Header
                className="ModalHeaderCarShop"
                onClick={() => handlerErrorPurchase()}
                closeButton
              ></Modal.Header>
            <Modal.Body className="modal_items_body confirmpurchase_container">
            
              <div className="confirmpurchase">
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  className="checkconfirm errorconfirm"
                />
                <p>Hubo un error al tratar de realizar la compra</p>
              </div>
            </Modal.Body>
            </>
          )
        ) : confirmedPurchase ? (
          <>
              <Modal.Header
              className="ModalHeaderCarShop"
              onClick={() => setConfirmedPurchase(false)}
              closeButton
            ></Modal.Header>
            
          <Modal.Body
            
            className="modal_items_body confirmpurchase_container"
          >
          
            <div className="confirmpurchase">
              <FontAwesomeIcon icon={faCheckCircle} className="checkconfirm" />
              <p>Su compra fue confirmada</p>
            </div>
          </Modal.Body>
          </>
        ) : isLoading ? (
          <div>
            <Modal.Body className="modal_items_body isloading__container">
              <div className="isloadingpurchase">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin spinner" />
                <p>Su compra está siendo confirmada...</p>
              </div>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Modal.Header className="ModalHeaderCarShop" closeButton>
              <Modal.Title
                className="modalCarShopTitle"
                id="example-modal-sizes-title-lg"
              >
                Mi carrito de compras
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal_items_body">
              {itemsdata.length === 0 ? (
                <div className="emptycart">Su carrito esta vacio</div>
              ) : (
                <ItemsCarShop />
              )}
            </Modal.Body>
            <Modal.Footer className="modal_footer">
              <div className="modal__footercontainer">
                <div className="totalprice__container">
                  <div>Total: ${price.toFixed(2)}</div>
                </div>
                <div className="buttonsCart__container">
                  <div className="cancelbutton_container">
                    <Button
                      className="cancelButton"
                      onClick={() => setLgShow(false)}
                    >
                      Cancelar
                    </Button>{" "}
                  </div>
                  <div className="buttonmobile__container">
                    <Button
                      className="ButtonCart"
                      variant="info"
                      onClick={() => setLgShow(false)}
                    >
                      Continuar comprando
                    </Button>{" "}
                    <Button
                      className="ButtonCart2"
                      variant="dark"
                      onClick={() => sendinfoCart()}
                    >
                      Finalizar compra
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </div>
        )}

      </Modal>
    </>
  );
}

export default ModalCarShop;
