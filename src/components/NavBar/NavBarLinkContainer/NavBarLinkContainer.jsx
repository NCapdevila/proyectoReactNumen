import NavBarDropDown from "../NavBarDropDown/NavBarDropDown";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useState } from "react";
import { dropDownItemsWoman,dropDownItemsMan } from "../NavBarDropDown/NavBarDropDownItems";
import NavBarDropDownMobileMenu from "../NavBarDropDown/NavBarDropDownMobileMenu";
import { FaAngleDown, FaAngleUp, FaRegUser } from "react-icons/fa";


const NavBarLinkContainer = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menuMobileDropDownWoman, setMenuMobileDropDownWoman] = useState(false);
  const [menuMobileDropDownMan, setMenuMobileDropDownMan] = useState(false);
  return (
    <div>
      <div className={`links__container ${props.estado ? "active" : "closed"}`}>
        <div className={`mobile__icons ${props.estado ? "active" : "closed"}`}>
          <div className="searchNavBar__container">
            <svg
              width="25"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.934 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.502 16.443L21.058 21"
                stroke="#989BA0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <input
              className="inputNavBar"
              type="text"
              placeholder="Ingresa para buscar"
            />
          </div>
        </div>
        <div
          className="sublinks__container"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <NavBarLink text="Mujer"></NavBarLink>
          {dropdown && <div onMouseEnter={() => setDropdown(false)} className="backgroundDropdown"></div>} 
          {dropdown && (<NavBarDropDown links={dropDownItemsWoman} itsFor="Woman" />)}
        </div>
        <div
          className="sublinks__container"
          onMouseEnter={() => setDropdown2(true)}
          onMouseLeave={() => setDropdown2(false)}
        >
          <NavBarLink text="Hombre"></NavBarLink>
          {dropdown2 && <div onMouseEnter={() => setDropdown2(false)} className="backgroundDropdown"></div>} 
          {dropdown2 && (<NavBarDropDown links={dropDownItemsMan} itsFor="Man" />)}
        </div>
        
        <div className="listLinksMobileVersion__container">
          <div className="linkMobileContent_container">
          <div className="searchNavBar__container mobilesearch">
            <svg
              width="25"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.934 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.502 16.443L21.058 21"
                stroke="#989BA0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <input
              className="inputNavBar"
              type="text"
              placeholder="Ingresa para buscar"
            />
          </div>
          <div
            onClick={() => {
              setMenuMobileDropDownWoman(!menuMobileDropDownWoman);
            }}
            className={`sublinkMobile__container arrowmobile_container ${menuMobileDropDownWoman ? 'linkdeploy' : 'linkdeployclosed'}`}
          >
            <NavBarLink
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
            <NavBarLink text={`Hombre`}></NavBarLink>
            {
              menuMobileDropDownMan ? <FaAngleUp  className="iconarrow2"/> : <FaAngleDown className="iconarrow" />
            }
          </div>
          <NavBarDropDownMobileMenu
            links={dropDownItemsMan}
            estado={menuMobileDropDownMan}
            itsFor='Man'
          />
          <div className="sublinkMobile__container vendermobile__container">
            <NavBarLink text="Vender"></NavBarLink>
          </div>
          <div className="sublinkMobile__container userLogin">
            <FaRegUser className="userLoginIcon"/> <NavBarLink text="Ingresar"></NavBarLink>
          </div>
          <div className="sublinkMobile__container userLogin">
          <FaRegUser className="userLoginIcon"/> <NavBarLink text="Registrarme"></NavBarLink>
          </div>
          {/*<div className={`mobile__icons ${props.estado ? "active" : "closed"}`}>
          <NavBarIcon />
          </div>*/}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLinkContainer;
