import Logo from "./NavBarLogo/NavBarLogo";
import './NavBar.style.css'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa'
import NavBarLinkContainer from "./NavBarLinkContainer/NavBarLinkContainer";
import ImageLogo from '../ImageLogo/ImageLogo'

const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <ul>
        <ImageLogo />
        <NavBarLinkContainer estado={showMobileMenu}></NavBarLinkContainer>
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
