import React from 'react';
import ButtonFooter from './Buttons/Button';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcAmex, FaCcMastercard, FaWhatsapp } from "react-icons/fa";



function Footer(){
    return (
        <div>
            <div className='container-footer'>
            <div className='col'>
                <div className='container-novedades'>
                <p>Para recibir novedades y beneficios sumate a nuestra comunidad</p>
                <div className='container-email'>
                <input type="email" placeholder='Ingresa tu correo electrónico' className='input-mail' />
                <ButtonFooter text="Suscribirme" style="btn-footer" ></ButtonFooter>
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='container-atajos'>
                <ul className='container-list'>
                    <li className='li-info'>¿Cómo comprar?</li>
                    <li className='li-info'>¿Cómo vender?</li>
                    <li className='li-info'>Política de Devoluciones</li>
                    <li className='li-info'>Términos y condiciones</li>
                    <li className='li-info'>Misión</li>
                    <li className='li-info'>Contacto</li>
                    <li className='li-info'>Preguntas frecuentes</li>
                </ul>
                </div>
            </div>
            <div className='col'>
                
                <ul className='container-list-info'>
                    <li>Atención personalizada o consultas, contactanos:</li>
                </ul>
                <ul className='container-list-info'>
                    <li><FaWhatsapp /> +598 96 300 060</li>
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
            
            <div className='container-bottom-footer'>
                <div className='container-links-footer'>
                    <div className='container-seguinos'>SEGUINOS</div>
                    <div className='container-icons-footer'>
                    <a href=""><FaInstagram style={{fontSize : '25px'}} /></a>
                    <a href=""><FaFacebookF style={{fontSize : '25px'}} /></a>
                    <a href=""><FaLinkedinIn style={{fontSize : '25px'}} /></a>
                    </div>
                </div>
                <div className='container-copy'>
                &copy;{new Date().getFullYear()}, VOPERO | Todos los derechos reservados
                </div>
                <div className='container-payment'>
                <FaCcVisa style={{fontSize : '30px'}} />
                <FaCcAmex style={{fontSize : '30px'}} />
                <FaCcMastercard style={{fontSize : '30px'}} />
                </div>
            </div>
        </div>
    );
}

export default Footer;