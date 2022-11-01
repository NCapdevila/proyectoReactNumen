
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const NavBarIcon = () => {
  return (
    <div className="navicons__container">
      <a href="#"> <FaShoppingCart /></a>
      <button><FaUserAlt/></button>
    </div>
  );
};

export default NavBarIcon;
