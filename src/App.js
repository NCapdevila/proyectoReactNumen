import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgBottom from './components/ImgBottom/ImgBottom';
import './components/CarouselImages/CarouselImages.css'
import Footer from './components/Footer/Footer';
import CardsBe from './components/CardsBe/CardsBe';
import CarouselImages from './components/CarouselImages/CarouselImages';
import ShippingBanner from './components/ShippingBanner/ShippingBanner';
import CardContainer from './components/card_container/CardContainer';
import SwiperIg from './components/SwiperIg/SwiperIg';
import { ModalTitle } from 'react-bootstrap';
import Modal_Carshop from './components/Modal_Carshop/Modal_Carshop';


/*import "swiper/css/bundle";*/



function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <CarouselImages />
        <ShippingBanner />
        <CardContainer></CardContainer>
        <CardsBe />
        <SwiperIg /> 
        <ImgBottom />
        <Footer />
    </div>
  )
}

export default App;