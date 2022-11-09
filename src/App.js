import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgBottom from './components/ImgBottom/ImgBottom';
import './components/CarouselImages/CarouselImages.css'
import Footer from './components/Footer/Footer';
import CardsBe from './components/CardsBe/CardsBe';
import CarouselImages from './components/CarouselImages/CarouselImages';
import CardContainer from './components/card_container/CardContainer';
import SwiperIg from './components/SwiperIg/SwiperIg';

/*import "swiper/css/bundle";*/



function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <CarouselImages />
    <CardContainer></CardContainer>
    <CardsBe />
    <SwiperIg> </SwiperIg>
    <ImgBottom />
    <Footer />
    </div>
  )
}

export default App;