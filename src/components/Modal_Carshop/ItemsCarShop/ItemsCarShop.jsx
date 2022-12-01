import ItemCart from "./ItemCart/ItemCart";

const ItemsCarShop = (props) => {

  const deleteData = () =>{
    
  }

  const data = JSON.parse(localStorage.getItem("itemsprueba"))
  return (
    <div>
      <div>
        {
          data.map(data =>(
            <ItemCart 
            name={data.user}
            brand={data.brand}
            price={data.price}
            quantity={data.quantity}
            finalquantity={data.quantityfinally}
            id={data.id}
            />
          ))
          
        }
      </div>
    </div>
  );
};

export default ItemsCarShop;
