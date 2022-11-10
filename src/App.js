import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ImgBottom from './components/ImgBottom/ImgBottom';
import Footer from './components/Footer/Footer';
import CardContainer from './components/card_container/CardContainer';
import CarouselImages from './components/CarouselImages/CarouselImages';
import ShippingBanner from './components/ShippingBanner/ShippingBanner';

function App() {
  return (

    <div className="App">
        <NavBar></NavBar>
        <CarouselImages />
        <ShippingBanner></ShippingBanner>
        <CardContainer></CardContainer>
        <ImgBottom />
        <Footer />
    </div>
  )
}

export default App;