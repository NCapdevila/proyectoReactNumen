import React from 'react';
import './Footer.css';


function Footer(){
    return (
        <div>
            <div className='container-footer'>
            <div className='col'>
                <div className='container-novedades'>
                <p>Para recibir novedades y beneficios sumate a nuestra comunidad</p>
                <input type="text" />
                <button>Suscribirme</button>
                </div>
            </div>
            <div className='col'>
                <div className='container-atajos'>
                <ul className='container-list'>
                    <li>¿Cómo comprar?</li>
                    <li>¿Cómo vender?</li>
                    <li>Política de Devoluciones</li>
                    <li>Términos y condiciones</li>
                    <li>Misión</li>
                    <li>Contacto</li>
                    <li>Preguntas frecuentes</li>
                </ul>
                </div>
            </div>
            <div className='col'>
                <div>
                <ul className='container-list-info'>
                    <li>Para más información, atención personalizada o consultas, contactanos:</li>
                </ul>

                <ul className='container-list-info'>
                    <li>+598 96 300 060</li>
                    <li>Lunes a viernes de 9 a 23hs | Sábados de 10 a 18hs</li>   
                    <li>Domingos de 10 a 14hs</li>
                    <li>contacto@vopero.com </li>     
                </ul>   
                    
                <ul className='container-list-info'>
                    <li>Marco Bruto 1369, Montevideo, Uruguay</li>
                    <li>Lunes a viernes de 10 a 19hs | Sábados de 9 a 13hs</li> 
                </ul>
                </div>
            </div>
            </div>
            
            <div className='container-bottom-footer'>
                <div className='container-links-footer'>
                    <p>SEGUINOS</p>
                    <a href="">instagram</a>
                    <a href="">facebook</a>
                    <a href="">linkedin</a>
                </div>
                <div className='container-copy'>
                &copy;{new Date().getFullYear()}, VOPERO | Todos los derechos reservados
                </div>
                <div className='container-payment'>

                </div>
            </div>
        </div>
    );
}

export default Footer;