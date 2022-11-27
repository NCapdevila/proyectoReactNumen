import imagen from "../imagen.jpg";
import { FaTrashAlt } from "react-icons/fa";
import useFetchData from "../../../hooks/UseFetchData";
import Prueba from "./Prueba";
import useDeleteData from "../../../hooks/UseDeleteData";


const ItemsCarShop = (props) => {
  const { refetch,refetchData, url } = props;
  const {
    data: forms,
    isLoading: isDataLoading,
    error: dataError,
  } = useFetchData(`${url}/items`, refetch);

  const {
    deleteData,
    isLoading: isFormDeletion,
    error: DeletionError,
  } = useDeleteData(`${url}/items`, refetchData, "Hubo un error al intentar borrar el item")
  
  return (
    <div className="modalBodyCar__container">

      <div className="modalBodyImg__container">
        <img src={imagen} alt="" />
      </div>
      <div className="itemName">
        <span className="nameItem__container">Nombre del Articulo</span>
        <span>Talle:</span>
      </div>
      <div className="totalItems">
        <span className="totalItemsTitle">Cantidad:</span>
        <div className="changeTotalItems">
          <button className="buttontotalItems buttonitem-1">-</button>
          <div className="numberItems">1</div>
          <button className="buttontotalItems buttonitem-2">+</button>
        </div>
      </div>
      <div className="priceItem">
        <span>$8200</span>
      </div>
      <div className="deleteItem">
        <button>
          <FaTrashAlt />
        </button>
      </div>
      <div>
            {
                forms.map(forms =>{
                    
                    return(
                    <div>
                        <Prueba nombre={forms.name} apellido={forms.apellido} id={forms.id} causa={forms.causa} deleteData={deleteData} />
                    </div>
                    )
                }
                )
            }
        </div>
        {isFormDeletion ? (
                  <div className="deletionItemInfo">
                    <p>Se borro el producto del carrito</p>
                  </div>
        ) : ''

        }
    </div>
  );
};

export default ItemsCarShop;
