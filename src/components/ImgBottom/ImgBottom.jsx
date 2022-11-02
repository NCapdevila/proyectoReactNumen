import React from 'react';
import './ImgBottom.css';
import imgbottom from './imgbottom.jpg';

function ImgBottom () {
    return(
        <div className='container-img-bottom'>
            <div className='container-texto'>
                <div className='texto1'>
                    
                    ESTA REVOLUCIÓN YA COMENZÓ
                    
                </div>
                <div className='texto2'>
                    
                    Sumate a hacer la diferencia
                    
                </div>
            </div>
            <div className='container-img'>
                <img className='img-bottom' src={imgbottom} alt="" />
            </div>
        </div>
    )
}

export default ImgBottom;