
import { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Button from "../../Footer/Buttons/Button";
import Modal_Carshop from "../../Modal_Carshop/Modal_Carshop";

const NavBarIcon = () => {

  const [openModal, SetopenModal] = useState(false);

  console.log(openModal);
  return (
    <div className="navicons__container">
        <Modal_Carshop />
      <button className="userIconNavBar"><FaUserAlt/></button>
      <Button style='btn-nav' text='Vender'/>
    </div>

  );
};

export default NavBarIcon;
