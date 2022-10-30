import NavBarDropDown from "../NavBarDropDown/NavBarDropDown";
import NavBarIcon from "../NavBarIcons/NavBarIcons";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useState } from 'react';
import {dropDownItemsMens} from '../NavBarDropDown/NavBarDropDownItems';

const NavBarLinkContainer = (props) => {
  const [dropdown, setDropdown] = useState(false);
    return (
        <>       
        <div className={`links__container ${props.estado ? 'active' : 'closed'}`}>
        <li>
          <NavBarLink text="Mujer"></NavBarLink>
        </li>
        <li 
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        >
          <NavBarLink text="Hombre"></NavBarLink>
          { dropdown && <NavBarDropDown links={dropDownItemsMens} />}
        </li>
        <li>
          <NavBarLink text="Niños"></NavBarLink>
        </li>
        <div className={`mobile__icons ${props.estado ? 'active' : 'closed'}`}>
            <NavBarIcon />
        </div>
      </div>
      <div className="desktop__icons">
          <NavBarIcon className='desktop__icons' />
      </div>
      </> 
    )
}

export default NavBarLinkContainer;