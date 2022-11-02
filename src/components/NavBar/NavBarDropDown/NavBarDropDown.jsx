import NavBarDropDownItemsContainer from './NavBarDropDownItemsContainer';

import {dropDownItemsBrands, dropDownItemsTopSellers, dropDownItemsExtras} from './NavBarDropDownItems'; 


const NavBarDropDown = (props) =>{

    const { links, itsFor } = props;
    return (
        <div className='navbar__dropdown'>
            <div className='DropdownSections__container'>
                <NavBarDropDownItemsContainer items={links} title='Categoria' />
                <NavBarDropDownItemsContainer items={dropDownItemsBrands} itsFor= {itsFor} title='Marcas' />
                <NavBarDropDownItemsContainer items={dropDownItemsTopSellers} itsFor= {itsFor} title='Top-Sellers' />
                <NavBarDropDownItemsContainer items={dropDownItemsExtras} title='Mas opciones' />
            </div>
        </div>
    )
}

export default NavBarDropDown;