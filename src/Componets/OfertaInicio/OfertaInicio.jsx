import React from 'react';
import './style-OfertaInicio.css';
function OfertaInicio ({ texto }){
    return (
        <div className="contenedor-principal">
            <div className="contenedor-texto">
                <p className="texto-oferta">
                    {texto}
                </p>
            </div>
        </div>
    )
}

export default OfertaInicio;