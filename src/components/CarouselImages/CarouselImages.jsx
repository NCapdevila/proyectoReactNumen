import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselImages.css'
import banner_1_Desktop from './images/banner_1_Desktop.png';
import banner_2_Desktop from './images/banner_2_Desktop.png';
import banner_3_Desktop from './images/banner_3_Desktop.png';


function CarouselImages() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {banner_1_Desktop}
          alt="First slide"/>
        <Carousel.Caption>
          <h3 className='title'>Mujeres</h3>
          <p className='paragraph'>Las mejores marcas y precios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_2_Desktop}
          alt="Second slide"/>

        <Carousel.Caption>
          <h3 className='title'>Hombres</h3>
          <p className='paragraph'>Encontrá lo que estás buscando</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {banner_3_Desktop}
          alt="Third slide"/>
        <Carousel.Caption>
          <h3 className='title'>Recirculá</h3>
          <p className='paragraph'>
            Dale una segunda oportunidad a tus prendas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;