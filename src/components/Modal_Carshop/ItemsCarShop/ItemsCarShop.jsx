import imagen from "../imagen.jpg";
import { FaTrashAlt } from "react-icons/fa";
import useFetchData from "../../../hooks/UseFetchData";
import Prueba from "./Prueba";
import useDeleteData from "../../../hooks/UseDeleteData";
import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {
  const { refetch,refetchData, url } = props;
  const {
    data: forms,
    isLoading: isDataLoading,
    error: dataError,
  } = useFetchData(url, refetch);

  const {
    deleteData,
    isLoading: isFormDeletion,
    error: DeletionError,
  } = useDeleteData(url, refetchData, "Hubo un error al intentar borrar el item")
  
  return (
    <div>
      {
        forms.map(form =>(
          <ItemCart 
          name={form.type}
          brand={form.brand}
          price={form.price}
          quantity={form.quantity}
          deleteData={deleteData}
          id={form.id}
          />
        ))
      }
    </div>
  );
};

export default ItemsCarShop;
