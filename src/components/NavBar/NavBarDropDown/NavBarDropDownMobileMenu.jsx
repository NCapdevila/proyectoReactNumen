import { useState } from 'react';
import ArrowMobile from './ArrowMobile';
import {dropDownItemsBrands, dropDownItemsTopSellers , dropDownItemsExtras} from './NavBarDropDownItems'; 
import NavBarDropDownItemsContainer from './NavBarDropDownItemsContainer';

const NavBarDropDownMobileMenu = (props) =>{
    const { links, itsFor } = props;
    const [selected, setSelected] = useState(null);
 
    const toggle= (index) =>{
        if(selected === index){
            return setSelected(null);
            
        }
        setSelected(index);
    }
    const nameItems = [
        {
            nameItem : 'Categoria',
            id: 1,
            item: <NavBarDropDownItemsContainer items={links}/>
        },
        {
            nameItem : 'Marcas',
            id: 2,
            item: <NavBarDropDownItemsContainer items={dropDownItemsBrands} itsFor= {itsFor}/>
        },
        {
            nameItem : 'Top Sellers',
            id: 3,
            item: <NavBarDropDownItemsContainer items={dropDownItemsTopSellers} itsFor= {itsFor}/>
        },
        {
            nameItem : 'Mas opciones',
            id: 4,
            item: <NavBarDropDownItemsContainer items={dropDownItemsExtras}/>
        },
    ]

    return(
        <div className={`navBarDropDownMobileMenu__container ${props.estado ? "active" : "closed"}`}>


                {
                    nameItems.map((item, index) =>{
                        return(
                        <>
                        <div className='itemMenuMobile_container'  onClick={() => {toggle(index)}}>
                            <li key={item.id}>{item.nameItem}</li>
                            <ArrowMobile state={selected === index ? true : false}/>
                        </div>
                        <div className={`${selected === index ? 'showContent' : 'disableContent'}`}>
                            {item.item}
                            </div>
                        </>
                        )
                        
                    })
                }
        </div>
    )
}

export default NavBarDropDownMobileMenu;