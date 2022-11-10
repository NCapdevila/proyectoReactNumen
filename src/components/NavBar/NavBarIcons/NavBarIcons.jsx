
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Button from "../../Footer/Buttons/Button";

const NavBarIcon = () => {
  return (
    <div className="navicons__container">
      <a href="#" className="userIconNavBar"> <FaShoppingCart /></a>
      <button className="userIconNavBar"><FaUserAlt/></button>
      <Button style='btn-nav' text='Vender'/>
    </div>
  );
};

export default NavBarIcon;
