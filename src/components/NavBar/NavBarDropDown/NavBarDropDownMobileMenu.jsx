import { useState } from 'react';
import {dropDownItemsBrands, dropDownItemsTopSellers, dropDownItemsExtras} from './NavBarDropDownItems'; 
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
            item: <NavBarDropDownItemsContainer items={links}/>
        },
        {
            nameItem : 'Marcas',
            item: <NavBarDropDownItemsContainer items={dropDownItemsBrands} itsFor= {itsFor}/>
        },
        {
            nameItem : 'Top Sellers',
            item:  <NavBarDropDownItemsContainer items={dropDownItemsTopSellers} itsFor= {itsFor} />
        },
        {
            nameItem : 'Mas opciones',
            item: <NavBarDropDownItemsContainer items={dropDownItemsExtras}/>
        },
    ]

    return(
        <div className={`navBarDropDownMobileMenu__container ${props.estado ? "active" : "closed"}`}>


                {
                    nameItems.map((item, index) =>{
                        return(
                        <>
                        <div className='itemMenuMobile_container' onClick={() => toggle(index)}>
                            <li key={index}>{item.nameItem}</li>
                        </div>
                        <div className={`${selected === index ? 'showContent' : 'disableContent'}`}>
                            {item.item}
                            </div>
                        </>
                        )
                        
                    })
                }
                {/*<li key={1}>Categoria</li>
                <NavBarDropDownItemsContainer items={links} title='Categoria' />
                <li key={2}>Marcas</li>
                <NavBarDropDownItemsContainer items={dropDownItemsBrands} itsFor= {itsFor} title='Marcas' />
                <li key={3}>Top Sellers</li>
                <NavBarDropDownItemsContainer items={dropDownItemsTopSellers} itsFor= {itsFor} title='Top-Sellers' />
                <li key={4}>Descubre</li>
                <NavBarDropDownItemsContainer items={dropDownItemsExtras} title='Mas opciones' />*/}
        </div>
    )
}

export default NavBarDropDownMobileMenu;