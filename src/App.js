import './App.css';
import CarouselImages from './components/CarouselImages/CarouselImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CarouselImages/CarouselImages.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ImgBottom from './components/ImgBottom/ImgBottom';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className="App">

<CarouselImages></CarouselImages>
        <NavBar></NavBar>
        <ImgBottom />
        <Footer />
    </div>
  )
}

export default App;