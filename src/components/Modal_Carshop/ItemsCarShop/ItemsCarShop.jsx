import imagen from '../imagen.jpg';
import {FaTrashAlt } from 'react-icons/fa';

const ItemsCarShop = () =>{
    return(
        <div className='modalBodyCar__container'>
        <div className='modalBodyImg__container'>
            <img src={imagen} alt="" />
        </div>
        <div className='itemName'>
            <span className='nameItem__container'>Nombre del Articulo</span>
            <span>Talle:</span>
        </div>
        <div className='totalItems'>
            <span className='totalItemsTitle'>Cantidad:</span>
            <div className='changeTotalItems'>
                <button className='buttontotalItems buttonitem-1'>-</button>
                <div className='numberItems'>1</div>
                <button className='buttontotalItems buttonitem-2'>+</button>
            </div>
        </div>
        <div className='priceItem'>
            <span>$8200</span>
        </div>
        <div className='deleteItem'>
            <button><FaTrashAlt/></button>
        </div>
    </div>
    )
}

export default ItemsCarShop;