
import { useState } from 'react';
import {dropDownItemsMens} from './NavBarDropDownItems';



const NavBarDropDown = (props) =>{

    const { links } = props;
    return (
        <div className='navbar__dropdown'>
        <ul>
            {
                dropDownItemsMens.map(item =>{
                    return (
                        <li className={item.classN} key={item.id}>
                         {item.nameItem}
                        </li>
                    )
                })
            }

            
        </ul>
        <ul>

        </ul>
        </div>
    )
}

export default NavBarDropDown;