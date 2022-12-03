import './NavBar.style.css'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars} from 'react-icons/fa'
import NavBarLinkContainer from "./NavBarLinkContainer/NavBarLinkContainer";
import NavBarIcons from "./NavBarIcons/NavBarIcons";
import NavBarHeader from './NavBarHeader/NavBarHeader';
import ModalCarShop from '../Modal_Carshop/ModalCarShop';




const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [fixed, setFixed] = useState(false);

  const setFix = () =>{
    if(window.scrollY >= 1){
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", setFix);
  return (
    
    <div>
      <NavBarHeader />
      <div className={`navBar__Container ${fixed ? 'navbar_fixed' : 'navbar_notfixed'}`}>
        <div className="LogoNavBar__container">
          <span>Vopero</span>
        </div>
    
        
        <NavBarLinkContainer estado={showMobileMenu}></NavBarLinkContainer>
        <div  className='nav__icons'>
            <ModalCarShop />
            {
              showMobileMenu ?  <AiOutlineClose  onClick={() => setShowMobileMenu(!showMobileMenu)} /> : <FaBars onClick={() => setShowMobileMenu(!showMobileMenu)} />
            }
        </div>
        <div className='lateralNavBar__container'>
        <div className='searchNavBar__container'>
        <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.934 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.502 16.443L21.058 21" stroke="#989BA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <input className='inputNavBar' type="text" placeholder="Buscar productos..."/>
        </div>

          <NavBarIcons />
          </div>
      </div>
    </div>
  );

}
export default NavBar;
