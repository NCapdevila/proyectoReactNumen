import './App.css';
import CarouselImages from './components/CarouselImages/CarouselImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CarouselImages/CarouselImages.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ImgBottom from './components/ImgBottom/ImgBottom';
import Footer from './components/Footer/Footer';
import CardContainer from './components/card_container/CardContainer';
function App() {
  return (

    <div className="App">

<CarouselImages></CarouselImages>
        <NavBar></NavBar>
              <ImgBottom />
              <CardContainer />
        <Footer />
    </div>
  )
}

export default App;