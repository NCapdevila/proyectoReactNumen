import NavBarLink from "./NavBarLink/NavBarLink";
import Logo from "./NavBarLogo/NavBarLogo";
import './NavBar.style.css'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa'
import NavBarIcon from "./NavBarIcons/NavBarIcons";
const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <ul>
        <Logo />
        <div className={`links__container ${showMobileMenu ? 'active' : 'closed'}`}>
          <li>
            <NavBarLink text="Productos"></NavBarLink>
          </li>
          <li>
            <NavBarLink text="Contactos"></NavBarLink>
          </li>
          <li>
            <NavBarLink text="Sobre nosotros"></NavBarLink>
          </li>
          <li>
            <NavBarLink text="Buscar"></NavBarLink>
          </li>
          <div className={`mobile__icons ${showMobileMenu ? 'active' : 'closed'}`}>
              <NavBarIcon />
          </div>
        </div>
        <div className="desktop__icons">
            <NavBarIcon className='desktop__icons' />
        </div>
        <div  className='nav__icons' onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {
              showMobileMenu ?  <AiOutlineClose /> : <FaBars />
            }
        </div>
      </ul>
    </>
  );
};
export default NavBar;
