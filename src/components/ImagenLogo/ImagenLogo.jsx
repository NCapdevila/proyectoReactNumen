import React from 'react';
import './style-ImagenLogo.css';
import logoNav from './logoNav.jpg';

function ImagenLogo (){
    return (
        <div className='contenedor-logo-nav'>
            <img className='imagen-logo'
            src={logoNav} alt="" />
        </div>
    )
}

export default ImagenLogo;