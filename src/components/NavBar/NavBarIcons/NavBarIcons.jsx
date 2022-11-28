

import { FaUserAlt } from "react-icons/fa";
import Button from "../../Footer/Buttons/Button";
import ModalCarShop from "../../Modal_Carshop/ModalCarShop";


const NavBarIcon = () => {
  return (
    <div className="navicons__container">
      <ModalCarShop />
      <button className="userIconNavBar"><FaUserAlt/></button>
      <Button style='btn-nav' text='Vender'/>
    </div>

  );
};

export default NavBarIcon;
