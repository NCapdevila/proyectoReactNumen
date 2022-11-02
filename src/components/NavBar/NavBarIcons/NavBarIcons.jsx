
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Button from "../../Footer/Buttons/Button";

const NavBarIcon = () => {
  return (
    <div className="navicons__container">
      <a href="#"> <FaShoppingCart /></a>
      <button><FaUserAlt/></button>
      <Button className='buttonNavBar' text='Vender'/>
    </div>
  );
};

export default NavBarIcon;
