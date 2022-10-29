import OfertaInicio from "./components/OfferInitial/OfferInitial";
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ImgBottom from "./components/ImgBottom/ImgBottom";
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">

      
    <div>
      <div>
        <OfertaInicio texto={"Free Delivery over $100. Gift with Purchase over $150"} />
        <NavBar></NavBar>
        <ImgBottom />
        <Footer />
      </div>

    </div>
    </div>
  )
}

export default App;