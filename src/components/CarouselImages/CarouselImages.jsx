import Carousel from 'react-bootstrap/Carousel';



function CarouselImages() {
  return (
    <Carousel className='carousel__container' fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "./images/banner_1_1350.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='title'>Mujeres</h3>
          <p className='paragraph'>Las mejores marcas y precios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner_2_1350.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='title'>Hombres</h3>
          <p className='paragraph'>Encontrá lo que estás buscando</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner_3_1350.png"
          alt="Third slide"
        />
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