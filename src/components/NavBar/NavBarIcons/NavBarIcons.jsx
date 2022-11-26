
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaUserAlt} from "react-icons/fa";
import Button from "../../Footer/Buttons/Button";
import Modal_Carshop from "../../Modal_Carshop/Modal_Carshop";

const NavBarIcon = () => {

  const [openModal, SetopenModal] = useState(false);
  const [itemsCarrito, setitemsCarrito] = useState([])

  useEffect(() =>{
    const verItemsCarrito = async ()=>{
      const res = await axios.get('http://localhost:9000/itemsCart');
      setitemsCarrito(res.data.length)
    }
    verItemsCarrito();
  },[itemsCarrito])

  console.log(openModal);
  return (
    <div className="navicons__container">
        <Modal_Carshop cantidadCarrito = {itemsCarrito}/>
      <button className="userIconNavBar"><FaUserAlt/></button>
      <Button style='btn-nav' text='Vender'/>
    </div>

  );
};

export default NavBarIcon;
