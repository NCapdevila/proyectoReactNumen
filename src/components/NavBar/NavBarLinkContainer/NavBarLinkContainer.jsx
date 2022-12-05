import NavBarDropDown from "../NavBarDropDown/NavBarDropDown";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useState } from "react";
import { dropDownItemsWoman,dropDownItemsMan } from "../NavBarDropDown/NavBarDropDownItems";
import NavBarDropDownMobileMenu from "../NavBarDropDown/NavBarDropDownMobileMenu";
import { FaAngleDown, FaAngleUp, FaRegUser } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";



const NavBarLinkContainer = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menuMobileDropDownWoman, setMenuMobileDropDownWoman] = useState(false);
  const [menuMobileDropDownMan, setMenuMobileDropDownMan] = useState(false);
  return (
    <div>
      <div  className={`links__container ${props.estado ? "active" : "closed"}`}>
        <div  className={`mobile__icons ${props.estado ? "active" : "closed"}`}>
          <SearchBar />
        </div>
        <div
        
          className="sublinks__container"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <NavBarLink key={1} text="Mujer"></NavBarLink>
          {dropdown && <div onMouseEnter={() => setDropdown(false)} className="backgroundDropdown"></div>} 
          {dropdown && (<NavBarDropDown links={dropDownItemsWoman} itsFor="Woman" />)}
        </div>
        <div
        
          className="sublinks__container"
          onMouseEnter={() => setDropdown2(true)}
          onMouseLeave={() => setDropdown2(false)}
        >
          <NavBarLink key={2} text="Hombre"></NavBarLink>
          {dropdown2 && <div onMouseEnter={() => setDropdown2(false)} className="backgroundDropdown"></div>} 
          {dropdown2 && (<NavBarDropDown links={dropDownItemsMan} itsFor="Man" />)}
        </div>
        
        <div className="listLinksMobileVersion__container">
          <div className="linkMobileContent_container">
          <SearchBar />
          <div
          
            onClick={() => {
              setMenuMobileDropDownWoman(!menuMobileDropDownWoman);
            }}
            className={`sublinkMobile__container arrowmobile_container ${menuMobileDropDownWoman ? 'linkdeploy' : 'linkdeployclosed'}`}
          >
            <NavBarLink
            key={3}
              text={`Mujer`}
            ></NavBarLink>
                          {
                menuMobileDropDownWoman ? <FaAngleUp  className="iconarrow2"/> : <FaAngleDown className="iconarrow" />
              }
          </div>
          <NavBarDropDownMobileMenu
            links={dropDownItemsWoman}
            estado={menuMobileDropDownWoman}
            itsFor='Woman'
          />
          <div
          
            onClick={() => {
              setMenuMobileDropDownMan(!menuMobileDropDownMan);
            }}
            
            className={`sublinkMobile__container arrowmobile_container ${menuMobileDropDownMan ? 'linkdeploy' : 'linkdeployclosed'}`}
          >
            <NavBarLink key={4} text={`Hombre`}></NavBarLink>
            {
              menuMobileDropDownMan ? <FaAngleUp  className="iconarrow2"/> : <FaAngleDown className="iconarrow" />
            }
          </div>
          <NavBarDropDownMobileMenu
            links={dropDownItemsMan}
            estado={menuMobileDropDownMan}
            itsFor='Man'
          />
          <div  className="sublinkMobile__container vendermobile__container">
            <NavBarLink key={5} text="Vender"></NavBarLink>
          </div>
          <div  className="sublinkMobile__container userLogin">
            <FaRegUser className="userLoginIcon"/> <NavBarLink  key={6} text="Ingresar"></NavBarLink>
          </div>
          <div  className="sublinkMobile__container userLogin">
          <FaRegUser className="userLoginIcon"/> <NavBarLink key={7} text="Registrarme"></NavBarLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLinkContainer;
