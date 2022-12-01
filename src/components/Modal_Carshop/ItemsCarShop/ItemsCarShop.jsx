import useFetchData from '../../../hooks/UseFetchData'
import useDeleteData from "../../../hooks/UseDeleteData";
import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {
  const { refetch,refetchData, url } = props;
  const {
    data: forms,
    isLoading: isDataLoading,
    error: dataError,
  } = useFetchData(url, refetch)

  const {
    deleteData,
    successDelete: issuccessDelete,
    error: DeletionError,
  } = useDeleteData(url, refetchData, "Hubo un error al intentar borrar el item")
  return (
    <div>
    <div>
      
      {
      dataError.IsError ? 
      <div>Hubo un error al intentar cargar los íems del carrito</div> 
      :
      isDataLoading && !dataError.IsError ? 
      "Cargando items"
      :
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
    <div>{issuccessDelete ? "" :
    <div>Se borró un ítem del carrito</div>
      }</div>
    </div>
  );
};

export default ItemsCarShop;
