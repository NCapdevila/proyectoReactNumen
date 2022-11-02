import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CarouselImages/CarouselImages.css'
import NavBar from './components/NavBar/NavBar';
import ImgBottom from './components/ImgBottom/ImgBottom';
import Footer from './components/Footer/Footer';
import CardContainer from './components/card_container/CardContainer';
import CarouselImages from './components/CarouselImages/CarouselImages';

function App() {
  return (

    <div className="App">


        <NavBar></NavBar>
        <CarouselImages />
        <CardContainer></CardContainer>
        <ImgBottom />
        <Footer />
    </div>
  )
}

export default App;