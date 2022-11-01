import NavBarDropDown from "../NavBarDropDown/NavBarDropDown";
import NavBarIcon from "../NavBarIcons/NavBarIcons";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useState } from "react";
import {
  dropDownItemsWoman,
  dropDownItemsMan,
} from "../NavBarDropDown/NavBarDropDownItems";

const NavBarLinkContainer = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  return (
    <div>
      <div className={`links__container ${props.estado ? "active" : "closed"}`}>
        <div 
          className="sublinks__container"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <NavBarLink text="Mujer"></NavBarLink>
          {dropdown && <NavBarDropDown links={dropDownItemsWoman} itsFor='Woman'/>}
        </div>
        <div
          className="sublinks__container"
          onMouseEnter={() => setDropdown2(true)}
          onMouseLeave={() => setDropdown2(false)}
        >
          <NavBarLink text="Hombre"></NavBarLink>
          {dropdown2 && <NavBarDropDown links={dropDownItemsMan} itsFor='Man'/>}
        </div>
        <div className={`mobile__icons ${props.estado ? "active" : "closed"}`}>
          <NavBarIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBarLinkContainer;
